import {Construct} from 'constructs';
import {EventBus, IEventBus, Rule} from 'aws-cdk-lib/aws-events';
import {Effect, PolicyDocument, PolicyStatement, Role, ServicePrincipal} from 'aws-cdk-lib/aws-iam';
import {CfnPipe} from 'aws-cdk-lib/aws-pipes';
import {FleaEventStore} from './event-store.construct';
import {EventBus as EventBusTarget} from 'aws-cdk-lib/aws-events-targets';

export interface FleaEventBusProps {
  domainName: string;
  eventStore: FleaEventStore;
  publicEventBusName: string;
}

export class FleaEventBus extends Construct {

  bus: EventBus;

  constructor(scope: Construct, id: string, props: FleaEventBusProps) {
    super(scope, id);

    const bus = new EventBus(this, 'event-bus', {
      eventBusName: props.domainName,
    });

    const sourcePolicy = new PolicyDocument({
      statements: [
        new PolicyStatement({
          resources: [props.eventStore.table.tableStreamArn],
          actions: [
            'dynamodb:DescribeStream',
            'dynamodb:GetRecords',
            'dynamodb:GetShardIterator',
            'dynamodb:ListStreams'
          ],
          effect: Effect.ALLOW,
        })
      ]
    });
    const targetPolicy = new PolicyDocument({
      statements: [
        new PolicyStatement({
          resources: [bus.eventBusArn],
          actions: ['events:PutEvents'],
          effect: Effect.ALLOW,
        }),
      ],
    });

    const pipeRole = new Role(this, 'PipeRole', {
      assumedBy: new ServicePrincipal('pipes.amazonaws.com'),
      inlinePolicies: {
        sourcePolicy,
        targetPolicy,
      },
    });

    const pipe = new CfnPipe(this, 'pipe', {
      name: 'SampleTableModifyPipe',
      roleArn: pipeRole.roleArn,
      source: props.eventStore.table.tableStreamArn!,
      target: bus.eventBusArn,
      sourceParameters: {
        dynamoDbStreamParameters: {
          startingPosition: 'LATEST',
          batchSize: 1
        },
      },
      targetParameters: {
        eventBridgeEventBusParameters: {
          detailType: 'SampleTableModified',
          source: 'com.sample'
        },
      },
    });

    const rule = new Rule(this, 'rule', {
      eventPattern: {
        source: ["com.sample"],
        detail: {
          meta: {
            scope: ["public"],
          }
        }
      },
      eventBus: bus
    });

    const publicEventBus = EventBus.fromEventBusName(this, 'public-event-bus', props.publicEventBusName);

    rule.addTarget(new EventBusTarget(publicEventBus, {
    }));

    this.bus = bus;
  }
}
