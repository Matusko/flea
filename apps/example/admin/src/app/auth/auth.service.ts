
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';
import {ICredentials} from 'aws-amplify/lib/Common/types/types';

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure({
      Auth: {
        userPoolId: 'eu-central-1_EqxFLWRC8',
        userPoolWebClientId: '3i8a2rsqljtnejji37macgl56b',
        oauth: {
          domain: 'flea-example.auth.eu-central-1.amazoncognito.com',
          scope: ['openid', 'profile', 'email', 'aws.cognito.signin.user.admin'],
          redirectSignIn: 'http://localhost:4200',
          redirectSignOut: 'http://localhost:4200/login',
          responseType: 'code'
        }
      },
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });

  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }


  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password)
      .then(() => {
        this.authenticationSubject.next(true);
      });
  }

  public signOut(): Promise<any> {
    return Auth.signOut()
      .then(() => {
        this.authenticationSubject.next(false);
      });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
        .then((user: any) => {
          if (user) {
            return true;
          } else {
            return false;
          }
        }).catch(() => {
          return false;
        });
    }
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public currentSession(): Promise<any> {
    return Auth.currentSession();
  }

  public federatedSignIn(): Promise<ICredentials> {
    return Auth.federatedSignIn();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser()
      .then((cognitoUser: any) => {
        return Auth.updateUserAttributes(cognitoUser, user);
      });
  }

}
