import { Stack, App, StackProps } from 'aws-cdk-lib';
import {FleaDomain} from '@flea/domain-infra';
import * as path from 'path';

export class AppStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new FleaDomain(this, 'pets', {
      name: 'pets',
      foundationName: 'flea-example',
      domainResourcePath: 'pets',
      readModelTableName: 'pets',
      eventListenerProps: {
        functionName: 'pets-event-handler',
        entry: path.join(__dirname, 'lambda/event-handler/index.ts'),
      },
      queryHandlerProps: {
        functionName: 'pets-query-handler',
        entry: path.join(__dirname, 'lambda/query-handler/index.ts'),
      },
      commandHandlerProps: {
        functionName: 'pets-command-handler',
        entry: path.join(__dirname, 'lambda/command-handler/index.ts'),
      },
      readModelPublicBusIntegrationProps: {
        region: props.env.region,
        account: props.env.account,
        stage: 'prod'
      }
    });

  }
}
