import {Construct} from 'constructs';
import {
  CognitoUserPoolsAuthorizer,
  Deployment,
  IResource,
  LambdaIntegration, PassthroughBehavior
} from 'aws-cdk-lib/aws-apigateway';
import {UserPool} from 'aws-cdk-lib/aws-cognito';
import {IFunction} from 'aws-cdk-lib/aws-lambda';

export interface FleaEventStorePublicGatewayIntegrationProps {
  parentResource: IResource;
  domainResourcePath: string;
  stageName: string;
  userPoolId: string;
  corsHandler: IFunction;
  queryHandler: IFunction;
  commandHandler: IFunction;
}

export class FleaEventStorePublicGatewayIntegration extends Construct {
  constructor(scope: Construct, id: string, props: FleaEventStorePublicGatewayIntegrationProps) {
    super(scope, id);

    const userPool = UserPool.fromUserPoolId(this, 'user-pool', props.userPoolId);
    const authorizer = new CognitoUserPoolsAuthorizer(this, 'public-rest-gateway-authorizer', {
      cognitoUserPools: [userPool]
    });

    const putEventIntegration = new LambdaIntegration(props.commandHandler,{
        proxy: false,
        passthroughBehavior: PassthroughBehavior.WHEN_NO_MATCH,
        integrationResponses: [
          {
            statusCode: '202',
            responseTemplates: {
              'application/json': `{
                "requestId": "$context.requestId"
              }`,
            },
            responseParameters: {
              'method.response.header.Access-Control-Allow-Headers': "'Content-Type,Authorization'",
              'method.response.header.Access-Control-Allow-Origin': "'http://localhost:4200'",
              'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,PUT'",
            },
          },
        ],
      requestTemplates: {
        'application/json': `{
                "id": "$context.requestId",
                "time": "$context.requestTime",
                "timeEpoch": $context.requestTimeEpoch,
                "userId": "$context.authorizer.claims.sub",
                "type": "$input.path('$.type')",
                "payload": $input.json('$.payload')
            }`,
       },
      }
    );

    const domainResource = props.parentResource.addResource(props.domainResourcePath);

    domainResource.addMethod('PUT', putEventIntegration, {
      authorizer,
      methodResponses: [
        {
          statusCode: '202',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Headers': true,
            'method.response.header.Access-Control-Allow-Methods': true,
            'method.response.header.Access-Control-Allow-Origin': true,
          },

        }
      ]
    });

    const queryHandlerIntegration = new LambdaIntegration(props.queryHandler,{
        proxy: false,
        passthroughBehavior: PassthroughBehavior.WHEN_NO_MATCH,
        integrationResponses: [
          {
            statusCode: "200",
            responseParameters: {
              'method.response.header.Access-Control-Allow-Headers': "'Content-Type,Authorization'",
              'method.response.header.Access-Control-Allow-Origin': "'http://localhost:4200'",
              'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET'",
            },
          },
        ],
      }
    );

    domainResource.addMethod('GET', queryHandlerIntegration, {
      methodResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Headers': true,
            'method.response.header.Access-Control-Allow-Methods': true,
            'method.response.header.Access-Control-Allow-Origin': true,
          },

        }
      ]
    });

    const corsIntegration = new LambdaIntegration(props.corsHandler);

    domainResource.addMethod('OPTIONS', corsIntegration, {
      methodResponses: [
        {
          statusCode: '200',

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
