import {Stack, App, StackProps} from 'aws-cdk-lib';
import {FleaFoundation} from '@flea/core-infra';
export class AppStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new FleaFoundation(this, 'example', {
      name: 'flea-example',
      enablePublicBus: true,
      enableAdmin: true,
      region: props.env.region,
      account: props.env.account
    });
  }
}
