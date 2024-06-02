import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, catchError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {PetRestClient} from './pet.rest-client';
import {addPetCommand, addPetCommandRegisterErr, addPetCommandRegisterSucc} from './pet.action';

@Injectable()
export class PetEffect {
  loadData$ = createEffect(() =>
    this.actions.pipe(
      ofType(addPetCommand),
      switchMap((action) =>
        this.petRestClient.putPet(action.payload).pipe(
          map(data => addPetCommandRegisterSucc()),
          catchError(error => of(addPetCommandRegisterErr({ payload: error })))
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private petRestClient: PetRestClient
  ) {}
}
