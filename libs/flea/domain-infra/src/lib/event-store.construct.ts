import {Construct} from 'constructs';
import {AttributeType, StreamViewType, Table} from 'aws-cdk-lib/aws-dynamodb';

export interface FleaEventStoreProps {
  domainName: string;
}

export class FleaEventStore extends Construct {
  table: Table;

  constructor(scope: Construct, id: string, props: FleaEventStoreProps) {
    super(scope, id);

    this.table = new Table(this, 'event-store', {
      tableName: `${props.domainName}-event-store`,
      stream: StreamViewType.NEW_IMAGE,
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'timeEpoch',
        type: AttributeType.NUMBER
      }
    });

  }
}
