import {Construct} from 'constructs';
import {FleaAdmin} from './admin/admin.contruct';
import {FleaRESTGateway} from './public/public-rest-gateway.contruct';
import {FleaPublicBus} from '@flea/public-bus';

export interface FleaFoundationProps {
  enablePublicBus: boolean;
  enableAdmin: boolean;
}

export class FleaFoundation extends Construct {
  constructor(scope: Construct, id: string, props: FleaFoundationProps) {
    super(scope, id);

    new FleaRESTGateway(this, 'public-gateway');

    if (props.enableAdmin) {
      new FleaAdmin(this, 'admin');
    }

    if (props.enablePublicBus) {
      new FleaPublicBus(this, 'public-bus');
    }


  }
}
