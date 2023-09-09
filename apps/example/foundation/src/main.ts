import { App } from 'aws-cdk-lib';
import { AppStack } from './app-stack';

const app = new App();
new AppStack(app, 'example-foundation', {
  env: {
    account: '',
    region: 'eu-central-1'
  }
});
