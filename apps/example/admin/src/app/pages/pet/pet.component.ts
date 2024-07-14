
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {addPetCommand, listPetsQuery} from './pet.action';
import {FormBuilder} from '@angular/forms';
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
    private store: Store<{ pet: PetState }>,
    private fb: FormBuilder
  ) {

  }

  petForm = this.fb.nonNullable.group({
    name: [''],
    type: [''],
  });

  addPetSubmit() {
    this.store.dispatch(addPetCommand({payload: this.petForm.getRawValue()}));
  }

}
