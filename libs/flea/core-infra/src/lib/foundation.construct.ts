import {Construct} from 'constructs';
import {FleaAdmin} from './admin/admin.contruct';
import {FleaRESTGateway} from './public/public-rest-gateway.contruct';
import {FleaPublicBus} from '@flea/public-bus';
import {FleaIdentityProvider} from '@flea/flea/identity-provider-infra';

export interface FleaFoundationProps {
  name: string;
  enablePublicBus: boolean;
  enableAdmin: boolean;
}

export class FleaFoundation extends Construct {
  constructor(scope: Construct, id: string, props: FleaFoundationProps) {
    super(scope, id);

    new FleaRESTGateway(this, 'public-gateway', {
      restApiGWName: props.name
    });

    new FleaIdentityProvider(this, 'identty-provider', {
      name: props.name
    });

    if (props.enableAdmin) {
      new FleaAdmin(this, 'admin');
    }

    if (props.enablePublicBus) {
      new FleaPublicBus(this, 'public-bus');
    }


  }
}
