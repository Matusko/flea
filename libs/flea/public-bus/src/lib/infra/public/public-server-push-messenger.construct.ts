import {Construct} from 'constructs';
import {IEventBus, Rule} from 'aws-cdk-lib/aws-events';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import {ITable} from 'aws-cdk-lib/aws-dynamodb';
import {Effect, PolicyStatement} from 'aws-cdk-lib/aws-iam';
import {LambdaFunction} from 'aws-cdk-lib/aws-events-targets';

export interface WSExecuteApiProps {
  stage: string;
  account: string;
  region: string;
  endpoint: string;
  apiId: string;
}

export interface FleaPublicServerPushMessengerProps {
  eventBus: IEventBus;
  connectionTable: ITable;
  wsExecuteApi: WSExecuteApiProps;
}

export class FleaPublicServerPushMessenger extends Construct {

  constructor(scope: Construct, id: string, props: FleaPublicServerPushMessengerProps) {
    super(scope, id);

    const publicServerPushMessengerFn = new NodejsFunction(this, 'public-server-push-messenger', {
      functionName: 'public-server-push-messenger',
      entry: path.join(__dirname, '../../app/public-server-push-messenger/index.ts'),
      environment: {
        WS_EXECUTE_ENDPOINT: props.wsExecuteApi.endpoint
      }
    });

    props.connectionTable.grantReadData(publicServerPushMessengerFn);

    publicServerPushMessengerFn.addToRolePolicy(new PolicyStatement({
      resources: [`arn:aws:execute-api:${props.wsExecuteApi.region}:${props.wsExecuteApi.account}:${props.wsExecuteApi.apiId}/${props.wsExecuteApi.stage}/POST/@connections/*`],
      actions: ['execute-api:ManageConnections'],
      effect: Effect.ALLOW,
    }));

    const rule = new Rule(this, 'rule', {
      eventPattern: {
        source: ["com.sample"],
        detail: {
          meta: {
            scope: ["public"],
          }
        }
      },
      eventBus: props.eventBus
    });

    rule.addTarget(new LambdaFunction(publicServerPushMessengerFn, {
    }));


  }
}
