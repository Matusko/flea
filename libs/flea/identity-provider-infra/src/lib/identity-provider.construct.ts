import {Construct} from 'constructs';
import {OAuthScope, UserPool, UserPoolDomain} from 'aws-cdk-lib/aws-cognito';

export interface FleaIdentityProviderProps {
  name: string;
}

export class FleaIdentityProvider extends Construct {
  constructor(scope: Construct, id: string, props: FleaIdentityProviderProps) {
    super(scope, id);

    const pool = new UserPool(this, 'user-pool', {
      userPoolName: props.name,
      signInAliases: {
        email: true
      }
    });
    pool.addClient('user-pool-client-admin', {
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [ OAuthScope.OPENID, OAuthScope.PROFILE, OAuthScope.EMAIL, OAuthScope.COGNITO_ADMIN],
        callbackUrls: [ 'http://localhost:4200' ],
        logoutUrls: [ 'http://localhost:4200/login' ],
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
