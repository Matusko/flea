import {Construct} from 'constructs';
import {FleaWSGateway, FleaWSGatewayAuthorizationProps} from './infra/public/public-ws-gateway.contruct';
import {FleaPublicServerPushMessenger} from './infra/public/public-server-push-messenger.construct';
import {FleaPublicEventBus} from './infra/public/public-event-bus.construct';
import {IEventBus} from 'aws-cdk-lib/aws-events';

export interface FleaPublicBusProps {
  region: string;
  account: string;
  apiName: string;
  authorization: FleaWSGatewayAuthorizationProps;
}

export class FleaPublicBus extends Construct {
  public fleaWSGateway: FleaWSGateway;
  public bus: IEventBus;

  constructor(scope: Construct, id: string, props: FleaPublicBusProps) {
    super(scope, id);

    const bus = new FleaPublicEventBus(this, 'public-event-bus', {});

    const wsGateway = new FleaWSGateway(this, 'ws-gateway', {
      name: props.apiName,
      authorization: props.authorization,
    });

    new FleaPublicServerPushMessenger(this, 'public-server-push-messenger', {
      connectionTable: wsGateway.connectionTable,
      wsExecuteApi: {
        endpoint: wsGateway.webSocketStage.callbackUrl,
        stage: wsGateway.webSocketStage.stageName,
        region: props.region,
        account: props.account,
        apiId: wsGateway.webSocketApi.apiId
      },
      eventBus: bus.bus,

    });


    this.fleaWSGateway = wsGateway;
    this.bus = bus.bus;

  }
}
