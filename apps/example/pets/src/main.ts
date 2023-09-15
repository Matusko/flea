import { App } from 'aws-cdk-lib';
import { AppStack } from './app-stack';

const app = new App();
new AppStack(app, 'example-pets', {
  env: {
    account: '588476158895',
    region: 'eu-central-1'
  }
});

