import {Construct} from 'constructs';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
import {NodejsFunction, NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';
import {LambdaFunction} from 'aws-cdk-lib/aws-events-targets';
import {IEventBus, Rule} from 'aws-cdk-lib/aws-events';

export interface FleaReadModelProps {
  eventBus: IEventBus;
  tableName: string;
  eventListenerProps: NodejsFunctionProps;
}

export class FleaReadModel extends Construct {
  table: Table;

  constructor(scope: Construct, id: string, props: FleaReadModelProps) {
    super(scope, id);

    this.table = new Table(this, 'read-model-table', {
      tableName: props.tableName,
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
    });

    const fn = new NodejsFunction(this, 'event-listener', props.eventListenerProps);

    const rule = new Rule(this, 'rule', {
      eventPattern: {
        source: ["com.sample"],
      },
      eventBus: props.eventBus
    });

    rule.addTarget(new LambdaFunction(fn, {
    }));

  }
}
