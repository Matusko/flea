
import {Component} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import {AuthService} from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import {addPetCommand} from './pet.action';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {

  constructor(
    private authService: AuthService,
    private store: Store<{ pet: {list: any[]} }>
  ) {

   // const socket$ = makeWebSocketObservable('wss://876ro4w8qd.execute-api.eu-central-1.amazonaws.com/prod/');

    this.authService.currentSession().then(user => this.initPublicBusConn(user.idToken.jwtToken));

  }

  addPet() {
    this.store.dispatch(addPetCommand());
  }

  private initPublicBusConn = (idToken: string) => {
    const subject = webSocket(`wss://6rsqtnl7ni.execute-api.eu-central-1.amazonaws.com/prod/?idToken=${idToken}`);

    subject.subscribe({
      next: msg => console.log('message received: ' + JSON.stringify(msg)), // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });
  }
}
