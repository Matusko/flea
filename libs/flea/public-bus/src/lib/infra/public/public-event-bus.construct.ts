import {Construct} from 'constructs';
import {EventBus, IEventBus} from 'aws-cdk-lib/aws-events';

export interface FleaPublicEventBusProps {
}

export class FleaPublicEventBus extends Construct {

  public bus: IEventBus;

  constructor(scope: Construct, id: string, props: FleaPublicEventBusProps) {
    super(scope, id);

    const bus = new EventBus(this, 'public-event-bus', {
      eventBusName: 'public-event-bus',
    });

    this.bus = bus;

  }
}
