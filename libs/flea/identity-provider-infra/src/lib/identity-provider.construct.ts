import {Construct} from 'constructs';
import {OAuthScope, UserPool, UserPoolDomain} from 'aws-cdk-lib/aws-cognito';

export interface FleaIdentityProviderProps {
  name: string;
}

export class FleaIdentityProvider extends Construct {
  constructor(scope: Construct, id: string, props: FleaIdentityProviderProps) {
    super(scope, id);

    const pool = new UserPool(this, 'user-pool', {
      userPoolName: props.name
    });
    pool.addClient('user-pool-client-admin', {
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [ OAuthScope.OPENID ],
        callbackUrls: [ 'https://my-app-domain.com/welcome' ],
        logoutUrls: [ 'https://my-app-domain.com/signin' ],
      },
    });

    new UserPoolDomain(this, 'user-pool-domain', {
      userPool: pool,
      cognitoDomain: {
        domainPrefix: props.name
      }
    });
  }
}
