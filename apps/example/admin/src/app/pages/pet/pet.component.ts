
import {Component} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import {AuthService} from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import {addPetCommand, listPetsQuery} from './pet.action';
import {FormBuilder} from '@angular/forms';
import {envConfig} from '../../../config/config';
import {selectPetList} from './pet.selector';
import {PetState} from './pet.reducer';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {
  readonly pets = this.store.selectSignal(selectPetList);

  ngOnInit() {
    this.store.dispatch(listPetsQuery());
  }

  constructor(
    private authService: AuthService,
    private store: Store<{ pet: PetState }>,
    private fb: FormBuilder
  ) {

   // const socket$ = makeWebSocketObservable('wss://876ro4w8qd.execute-api.eu-central-1.amazonaws.com/prod/');

    this.authService.currentSession().then(user => this.initPublicBusConn(user.idToken.jwtToken));

  }

  petForm = this.fb.nonNullable.group({
    name: [''],
    type: [''],
  });

  addPetSubmit() {
    this.store.dispatch(addPetCommand({payload: this.petForm.getRawValue()}));
  }

  private initPublicBusConn = (idToken: string) => {
    const subject = webSocket(`wss://${envConfig.wssApiGWDomainName}/prod/?idToken=${idToken}`);

    subject.subscribe({
      next: msg => console.log('message received: ' + JSON.stringify(msg)), // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });
  }
}
