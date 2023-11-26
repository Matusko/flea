import {Construct} from 'constructs';
import { WebSocketLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import {WebSocketApi, WebSocketStage} from '@aws-cdk/aws-apigatewayv2-alpha';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import {WebSocketLambdaAuthorizer} from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import {AttributeType, ITable, Table} from 'aws-cdk-lib/aws-dynamodb';

export interface FleaWSGatewayAuthorizationProps {
  userPoolId: string;
  appClientId: string;
}

export interface FleaWSGatewayProps {
  name: string;
  authorization: FleaWSGatewayAuthorizationProps;
}

export class FleaWSGateway extends Construct {
  public webSocketApi: WebSocketApi;
  public webSocketStage: WebSocketStage;
  public connectionTable: ITable;

  constructor(scope: Construct, id: string, props: FleaWSGatewayProps) {
    super(scope, id);

    const connectionTable = new Table(this, 'connection-store-table', {
      tableName: 'public-bus-connection-table',
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
    });

    connectionTable.addGlobalSecondaryIndex({
      indexName: 'userIdIndex',
      partitionKey: {name: 'userId', type: AttributeType.STRING},
    });

    const connectHandlerFn = new NodejsFunction(this, 'connect-handler', {
      functionName: 'public-bus-connect-handler',
      entry: path.join(__dirname, '../../app/connect-handler/index.ts'),
    });

    connectionTable.grantReadWriteData(connectHandlerFn);

    const disconnectHandlerFn = new NodejsFunction(this, 'disconnect-handler', {
      functionName: 'public-bus-disconnect-handler',
      entry: path.join(__dirname, '../../app/disconnect-handler/index.ts'),
    });

    connectionTable.grantReadWriteData(disconnectHandlerFn);


    const authorizerFn = new NodejsFunction(this, 'authorizer-lambda', {
      functionName: 'authorizer',
      entry: path.join(__dirname, '../../app/authorizer/index.ts'),
      environment: {
        'USER_POOL_ID': props.authorization.userPoolId,
        'APP_CLIENT_ID': props.authorization.appClientId,
      }
    });

    const authorizer = new WebSocketLambdaAuthorizer("authorizer", authorizerFn, {
      identitySource: ['route.request.querystring.idToken'],
    });

    const webSocketApi = new WebSocketApi(this, 'websocket-api', {
      apiName: props.name,
      connectRouteOptions: {
        authorizer,
        integration: new WebSocketLambdaIntegration('connect-handler-integration', connectHandlerFn)
      },
      disconnectRouteOptions: {
        integration: new WebSocketLambdaIntegration('connect-handler-integration', disconnectHandlerFn)
      }
    });
    const webSocketStage = new WebSocketStage(this, 'websocket-api-stage', {
      webSocketApi,
      stageName: 'prod',
      autoDeploy: true,
    });

    this.webSocketApi = webSocketApi;
    this.webSocketStage = webSocketStage;
    this.connectionTable = connectionTable;
  }
}
