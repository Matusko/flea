import {Construct} from 'constructs';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
import {NodejsFunction, NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';
import {LambdaFunction} from 'aws-cdk-lib/aws-events-targets';
import {IEventBus, Rule} from 'aws-cdk-lib/aws-events';
import {Effect, Policy, PolicyStatement} from 'aws-cdk-lib/aws-iam';
import {IFunction} from 'aws-cdk-lib/aws-lambda';

export interface ReadModelPublicBusIntegrationBaseProps {
  stage: string;
  account: string;
  region: string;
}

export interface ReadModelPublicBusIntegrationProps extends ReadModelPublicBusIntegrationBaseProps {
  webSocketApiId: string;
}

export interface FleaReadModelProps {
  eventBus: IEventBus;
  tableName: string;
  eventListenerProps: NodejsFunctionProps;
  publicBus: ReadModelPublicBusIntegrationProps;
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

    const fnEventListener = new NodejsFunction(this, 'event-handler', {
      ...props.eventListenerProps,
      environment: {
        EVENT_BUS_ARN: props.eventBus.eventBusArn,
        READ_MODEL_TABLE_NAME: this.table.tableName
      }
    });

    fnEventListener.addToRolePolicy(new PolicyStatement({
      resources: [props.eventBus.eventBusArn],
      actions: ['events:PutEvents'],
      effect: Effect.ALLOW,
    }));

    fnEventListener.addToRolePolicy(new PolicyStatement({
      resources: [ this.table.tableArn],
      actions: ['dynamodb:PutItem'],
      effect: Effect.ALLOW,
    }));


    const rule = new Rule(this, 'rule', {
      eventPattern: {
        source: ["com.sample"],
      },
      eventBus: props.eventBus
    });

    rule.addTarget(new LambdaFunction(fnEventListener, {
    }));

  }
}
