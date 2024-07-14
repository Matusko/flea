import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {webSocket} from 'rxjs/webSocket';
import {envConfig} from '../../config/config';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PublicBusService {

  readonly msgSubject: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(
    private authService: AuthService,
  ) {
    this.authService.currentSession().then(user => this.initPublicBusConn(user.idToken.jwtToken));

  }

  private initPublicBusConn = (idToken: string) => {
    const wsSubject = webSocket(`wss://${envConfig.wssApiGWDomainName}/prod/?idToken=${idToken}`);

    wsSubject.subscribe({
      next: msg => {
        console.log('message received: ' + JSON.stringify(msg));
        this.msgSubject.next(msg);
      }, // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });
  }


}
