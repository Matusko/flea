import {createAction, props} from '@ngrx/store';
import {Pet} from './types';

export const addPetCommandSuccActionName = 'pets/command-reply/addPetCommandSucc';

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

export const addPetCommandSucc = createAction(
  addPetCommandSuccActionName,
  props<{ payload: any}>()
);

export const listPetsQuery = createAction(
  'pets/query/listPets'
);

export const listPetsQuerySucc = createAction(
  'pets/query-reply/listPetsQuerySucc',
  props<{ payload: any}>()
);

export const listPetsQueryErr = createAction(
  'pets/query-reply/listPetsQueryErr',
  props<{ payload: any}>()
);
