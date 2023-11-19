import {Construct} from 'constructs';
import { WebSocketLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import {WebSocketApi, WebSocketStage} from '@aws-cdk/aws-apigatewayv2-alpha';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';

export class FleaWSGateway extends Construct {
  public webSocketApi: WebSocketApi;
  public webSocketStage: WebSocketStage;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const connectHandlerFn = new NodejsFunction(this, 'connect-handler', {
      functionName: 'public-bus-connect-handler',
      entry: path.join(__dirname, '../../app/connect-handler/index.ts'),
    });

    const webSocketApi = new WebSocketApi(this, 'mywsapi', {
      connectRouteOptions: {
        integration: new WebSocketLambdaIntegration('connetc-handler-integration', connectHandlerFn)
      },
    });
    const webSocketStage = new WebSocketStage(this, 'mystage', {
      webSocketApi,
      stageName: 'prod',
      autoDeploy: true,
    });

    this.webSocketApi = webSocketApi;
    this.webSocketStage = webSocketStage;

  }
}
