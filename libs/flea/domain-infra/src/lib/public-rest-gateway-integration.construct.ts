import {Construct} from 'constructs';
import {AwsIntegration, Deployment, IResource} from 'aws-cdk-lib/aws-apigateway';
import {Effect, Policy, PolicyStatement, Role, ServicePrincipal} from 'aws-cdk-lib/aws-iam';

export interface FleaEventStorePublicGatewayIntegrationProps {
  parentResource: IResource;
  domainResourcePath: string;
  stageName: string;
  eventStore: {
    tableName: string;
    tableArn: string;
  }
}

export class FleaEventStorePublicGatewayIntegration extends Construct {
  constructor(scope: Construct, id: string, props: FleaEventStorePublicGatewayIntegrationProps) {
    super(scope, id);

    const putEventPolicy = new Policy(this, 'putEventPolicy', {
      statements: [
        new PolicyStatement({
          actions: ['dynamodb:PutItem'],
          effect: Effect.ALLOW,
          resources: [props.eventStore.tableArn],
        }),
      ],
    });

    const putEventRole = new Role(this, 'putEventRole', {
      assumedBy: new ServicePrincipal('apigateway.amazonaws.com'),
    });
    putEventRole.attachInlinePolicy(putEventPolicy);

    const putEventIntegration = new AwsIntegration({
      action: 'PutItem',
      options: {
        credentialsRole: putEventRole,
        integrationResponses: [
          {
            statusCode: '202',
            responseTemplates: {
              'application/json': `{
                "requestId": "$context.requestId"
              }`,
            },
          },
        ],
        requestTemplates: {
          'application/json': `{
              "Item": {
                "id": {
                  "S": "$context.requestId"
                },
                "Name": {
                  "S": "$input.path('$.name')"
                },
                "Color": {
                  "S": "$input.path('$.color')"
                }
              },
              "TableName": "${props.eventStore.tableName}"
            }`,
        },
      },
      service: 'dynamodb',
    });

    const domainResource = props.parentResource.addResource(props.domainResourcePath);
    domainResource.addMethod('PUT', putEventIntegration, {
      methodResponses: [
        {
          statusCode: '202',

        }
      ]
    });
    const dateStr = new Date().toDateString();
    const deployment = new Deployment(this, 'public-rest-gateway-deployment', {
      api: props.parentResource.api,
      description: dateStr
    });
    deployment.addToLogicalId(dateStr);
    (deployment as any).resource.stageName = props.stageName;
    deployment.node.addDependency(domainResource);

  }
}
