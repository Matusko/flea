import {createAction, props} from '@ngrx/store';
import {Pet} from './types';

export const addPetCommand = createAction(
  'pets/command/addPet',
  props<{ payload: Pet}>()
);

export const addPetCommandRegisterSucc = createAction(
  'pets/command-reply/addPetCommandRegisterSucc'
);

export const addPetCommandRegisterErr = createAction(
  'pets/command-reply/addPetCommandRegisterErr',
  props<{ payload: any}>()
);
