import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, catchError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {PetRestClient} from './pet.rest-client';
import {
  addPetCommand,
  addPetCommandRegisterErr,
  addPetCommandRegisterSucc, addPetCommandSucc, addPetCommandSuccActionName,
  listPetsQuery, listPetsQueryErr,
  listPetsQuerySucc
} from './pet.action';
import {PublicBusService} from '../../services/public-bus.service';
import {Store} from '@ngrx/store';
import {PetState} from './pet.reducer';

@Injectable()
export class PetEffect {
  loadPets$ = createEffect(() =>
    this.actions.pipe(
      ofType(listPetsQuery),
      switchMap((action) =>
        this.petRestClient.listPets().pipe(
          map(data => listPetsQuerySucc({payload: data})),
          catchError(error => of(listPetsQueryErr({payload: error})))
        )
      )
    ),
  );

  addPet$ = createEffect(() =>
    this.actions.pipe(
      ofType(addPetCommand),
      switchMap((action) =>
        this.petRestClient.putPet(action.payload).pipe(
          map(data => addPetCommandRegisterSucc()),
          catchError(error => of(addPetCommandRegisterErr({payload: error})))
        )
      )
    ),
  );

  constructor(
    private actions: Actions,
    private petRestClient: PetRestClient,
    private publicBusService: PublicBusService,
    private store: Store<{ pet: PetState }>,
  ) {
    publicBusService.msgSubject.subscribe(msg => {
      this.mapMSGToAction(msg)
    })
  }

  private mapMSGToAction = (msg: any) => {

    if (msg) {
      switch (msg.type) {
        case addPetCommandSuccActionName:
          this.store.dispatch(addPetCommandSucc({ payload: msg.payload }));
          break;
        default:
          break;
      }
    }
  }
}
