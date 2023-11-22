import {Construct} from 'constructs';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
import {NodejsFunction, NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';
import {LambdaFunction} from 'aws-cdk-lib/aws-events-targets';
import {IEventBus, Rule} from 'aws-cdk-lib/aws-events';
import {Effect, PolicyStatement} from 'aws-cdk-lib/aws-iam';

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

    const fn = new NodejsFunction(this, 'event-listener', props.eventListenerProps);

    fn.addToRolePolicy(new PolicyStatement({
      resources: [`arn:aws:execute-api:${props.publicBus.region}:${props.publicBus.account}:${props.publicBus.webSocketApiId}/${props.publicBus.stage}/POST/@connections/*`],
      actions: ['execute-api:ManageConnections'],
      effect: Effect.ALLOW,
    }));

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
