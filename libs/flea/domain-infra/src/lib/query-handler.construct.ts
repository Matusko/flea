import {NodejsFunction, NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';
import {ITable} from 'aws-cdk-lib/aws-dynamodb';
import {Construct} from 'constructs';
import {IFunction} from 'aws-cdk-lib/aws-lambda';
import {Effect, PolicyStatement} from 'aws-cdk-lib/aws-iam';

export interface FleaQueryHandlerProps {
  queryHandlerProps: NodejsFunctionProps;
  readModelTable: ITable;
}

export class FleaQueryHandler extends Construct {

  function: IFunction;

  constructor(scope: Construct, id: string, props: FleaQueryHandlerProps) {
    super(scope, id);

    const fnQueryHandler = new NodejsFunction(this, 'query-handler', {
      ...props.queryHandlerProps,
      environment: {
        READ_MODEL_TABLE_NAME: props.readModelTable.tableName
      }
    });

    fnQueryHandler.addToRolePolicy(new PolicyStatement({
      resources: [ props.readModelTable.tableArn],
      actions: [
        'dynamodb:Query',
        'dynamodb:Scan'
      ],
      effect: Effect.ALLOW,
    }));


    this.function = fnQueryHandler;

  }
}
