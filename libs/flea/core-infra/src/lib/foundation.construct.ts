import {Construct} from 'constructs';
import {FleaAdmin} from './admin/admin.contruct';
import {FleaRESTGateway} from './public/public-rest-gateway.contruct';
import {FleaPublicBus} from '@flea/public-bus';
import {FleaIdentityProvider} from '@flea/flea/identity-provider-infra';
import {
  FleaFoundationOutputItem,
  FleaFoundationOutputs
} from './foundation-outputs.construct';

export interface FleaFoundationProps {
  name: string;
  enablePublicBus: boolean;
  enableAdmin: boolean;
}

export class FleaFoundation extends Construct {
  constructor(scope: Construct, id: string, props: FleaFoundationProps) {
    super(scope, id);

    const restAPiGW = new FleaRESTGateway(this, 'public-gateway', {
      restApiGWName: `${props.name}-rest`
    });

    const outputs: Array<FleaFoundationOutputItem> = [
      {
        key: 'restApiId',
        value: restAPiGW.restApiId
      },
      {
        key: 'rootResourceId',
        value: restAPiGW.rootResourceId
      }
    ]

    const identityProvider = new FleaIdentityProvider(this, 'identty-provider', {
      name: props.name
    });

    outputs.push({
      key: 'userPoolId',
      value: identityProvider.userPool.userPoolId
    });

    if (props.enableAdmin) {
      new FleaAdmin(this, 'admin');
    }

    if (props.enablePublicBus) {
      const publicBus = new FleaPublicBus(this, 'public-bus', {
        apiName: `${props.name}-public-bus`
      });
      outputs.push({
        key: 'webSocketApiId',
        value: publicBus.fleaWSGateway.webSocketApi.apiId
      });
    }

    new FleaFoundationOutputs(this, 'outputs', {
      prefix: props.name,
      outputs
    });


  }
}
