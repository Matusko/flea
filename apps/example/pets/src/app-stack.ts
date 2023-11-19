import { Stack, App, StackProps } from 'aws-cdk-lib';
import {FleaDomain} from '@flea/domain-infra';
import {Code, Runtime} from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class AppStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new FleaDomain(this, 'pets', {
      name: 'pets2',
      restApiId: '9wejt4xyxa',
      rootResourceId: 'zu9qs4uwok',
      domainResourcePath: 'pets',
      readModelTableName: 'pets',
      eventListenerProps: {
        functionName: 'pets-event-handler',
        entry: path.join(__dirname, 'lambda/index.ts'),
      }
    });

  }
}
