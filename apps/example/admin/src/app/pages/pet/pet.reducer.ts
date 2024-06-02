import { createReducer, on } from '@ngrx/store';
import { addPetCommand } from './pet.action';
import {Pet} from './types';

export type PetState = {
  list: Pet[];
  operations: {
    add: {
      loading: boolean;
      error?: any;
    }
  }
};

export const initialState: PetState = {
  list: [],
  operations: {
    add: {
      loading: false,
    }
  }
};

export const petReducer = createReducer(
  initialState,
  on(
    addPetCommand, (state) => {
      return {
        list: [...state.list, {name: 'aaaa', type: 'bbbb'}],
        operations: state.operations
      }
    }
  )
);
