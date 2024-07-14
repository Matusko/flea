import {PetState} from './pet.reducer';
import {createSelector} from '@ngrx/store';

export const selectPet = (state: {pet: PetState}) => state.pet;
export const selectPetList = createSelector(
  selectPet,
  (state: PetState) => state.list
);

