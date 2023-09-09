import {Construct} from 'constructs';
import {FleaAdmin} from './admin/admin.contruct';
import {FleaRESTGateway} from './public/public-rest-gateway.contruct';

export class FleaFoundation extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new FleaAdmin(this, 'admin');
    new FleaRESTGateway(this, 'public-gateway')
  }
}
