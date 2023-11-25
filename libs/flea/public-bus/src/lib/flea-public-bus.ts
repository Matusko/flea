import {Construct} from 'constructs';
import {FleaWSGateway} from './infra/public/public-ws-gateway.contruct';

export interface FleaPublicBusProps {
  apiName: string;
}

export class FleaPublicBus extends Construct {
  public fleaWSGateway: FleaWSGateway;
  constructor(scope: Construct, id: string, props: FleaPublicBusProps) {
    super(scope, id);

    this.fleaWSGateway = new FleaWSGateway(this, 'ws-gateway', {
      name: props.apiName
    });

  }
}
