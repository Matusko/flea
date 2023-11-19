
import {Component} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {

  constructor() {

   // const socket$ = makeWebSocketObservable('wss://876ro4w8qd.execute-api.eu-central-1.amazonaws.com/prod/');

    const subject = webSocket('wss://876ro4w8qd.execute-api.eu-central-1.amazonaws.com/prod/');

    subject.subscribe({
      next: msg => console.log('message received: ' + JSON.stringify(msg)), // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });

  }
}
