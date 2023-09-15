import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AppStack } from './app-stack';

test('Empty Stack', () => {
  const app = new App();
  // WHEN
  const stack = new AppStack(app, 'example-petsTestStack');
  // THEN
  Template.fromStack(stack as Stack).templateMatches({
    Resources: {},
  });
});
