import {Construct} from 'constructs';
import {MockIntegration, PassthroughBehavior, RestApi} from 'aws-cdk-lib/aws-apigateway';

export interface FleaRESTGatewayProps {
  restApiGWName: string;
}

export class FleaRESTGateway extends Construct {
  public restApiId: string;
  public rootResourceId: string;

  constructor(scope: Construct, id: string, props: FleaRESTGatewayProps) {
    super(scope, id);

    const api = new RestApi(this, `${id}-public-rest-gateway`, {
      restApiName: props.restApiGWName,
    });

    const healthResource = api.root.addResource('health')
    healthResource.addMethod('GET', new MockIntegration({
      integrationResponses: [
        {
          statusCode: '200',
          responseTemplates: { 'application/json': `{"status": "OK"}` }
        },
      ],
      passthroughBehavior: PassthroughBehavior.NEVER,
      requestTemplates: {
        'application/json': '{ "statusCode": 200 }',
      },
    }), {
      methodResponses: [
        { statusCode: '200' },
      ],
    });
     this.restApiId = api.restApiId;
     this.rootResourceId = api.root.resourceId;

  }
}
