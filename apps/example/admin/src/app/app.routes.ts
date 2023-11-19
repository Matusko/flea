import { Route } from '@angular/router';
import {DrawIoComponent} from './draw-io/draw-io.component';
import {PetComponent} from './pet/pet.component';

export const appRoutes: Route[] = [
  { path: 'event-model', component: DrawIoComponent },
  { path: 'pet', component: PetComponent },
];
