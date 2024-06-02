import { createReducer, on } from '@ngrx/store';
import { addPetCommand } from './pet.action';

export const initialState: {list: any[]} = {
  list: []
};

export const petReducer = createReducer(
  initialState,
  on(addPetCommand, (state) => ({list: [...state.list, {}]})),
);
