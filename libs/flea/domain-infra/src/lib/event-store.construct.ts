import {Construct} from 'constructs';
import {AttributeType, StreamViewType, Table} from 'aws-cdk-lib/aws-dynamodb';

export class FleaEventStore extends Construct {
  table: Table;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.table = new Table(this, 'event-store', {
      stream: StreamViewType.NEW_IMAGE,
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,

      },
    });

  }
}
