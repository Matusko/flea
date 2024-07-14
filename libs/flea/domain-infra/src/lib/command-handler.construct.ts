import {Construct} from 'constructs';
import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import {NodejsFunction, NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';
import {Effect, PolicyStatement} from 'aws-cdk-lib/aws-iam';
import {IFunction} from 'aws-cdk-lib/aws-lambda';

export interface FleaCommandHandlerProps {
  domainName: string;
  commandHandlerProps: NodejsFunctionProps;
  eventStoreTable: ITable;
}

export class FleaCommandHandler extends Construct {

  function: IFunction;

  constructor(scope: Construct, id: string, props: FleaCommandHandlerProps) {
    super(scope, id);

    const fnEventListener = new NodejsFunction(this, 'command-handler', {
      ...props.commandHandlerProps,
      environment: {
        EVENT_STORE_TABLE_NAME: props.eventStoreTable.tableName
      }
    });

    fnEventListener.addToRolePolicy(new PolicyStatement({
      resources: [ props.eventStoreTable.tableArn],
      actions: ['dynamodb:PutItem'],
      effect: Effect.ALLOW,
    }));

    this.function = fnEventListener;

  }
}
