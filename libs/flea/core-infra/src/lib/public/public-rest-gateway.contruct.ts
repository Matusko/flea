import {Construct} from 'constructs';
import {MockIntegration, PassthroughBehavior, RestApi} from 'aws-cdk-lib/aws-apigateway';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';

export interface FleaRESTGatewayProps {
  restApiGWName: string;
}

export class FleaRESTGateway extends Construct {
  public restApiId: string;
  public rootResourceId: string;
  public corsHandlerArn: string;

  constructor(scope: Construct, id: string, props: FleaRESTGatewayProps) {
    super(scope, id);

    const corsHandler = new NodejsFunction(this, 'cors-handler', {
      functionName: 'cors-handler',
      entry: path.join(__dirname, '../app/cors-handler/index.ts'),
    });

    const api = new RestApi(this, `${id}-public-rest-gateway`, {
      restApiName: props.restApiGWName,
    });

    corsHandler.addPermission('PermitAPIGInvocation', {
      principal: new ServicePrincipal('apigateway.amazonaws.com'),
      sourceArn: api.arnForExecuteApi('*')
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
     this.corsHandlerArn = corsHandler.functionArn;

  }
}
