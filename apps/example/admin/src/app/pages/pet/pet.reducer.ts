import { createReducer, on } from '@ngrx/store';
import {addPetCommand, listPetsQuerySucc} from './pet.action';
import {Pet} from './types';

export type PetState = {
  list: Pet[];
  operations: {
    add: {
      loading: boolean;
      error?: any;
    },
    list: {
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
    },
    list: {
      loading: false,
    }
  }
};

export const petReducer = createReducer(
  initialState,
  on(
    addPetCommand, (state,  { payload }) => {
      return {
        list: [...state.list, payload],
        operations: state.operations
      }
    },
  ),
  on(
    listPetsQuerySucc, (state, { payload }) => {
      return {
        list: payload,
        operations: state.operations
      }
    },
  )
);
