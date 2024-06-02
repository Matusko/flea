import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import {PetComponent} from './pet/pet.component';
import {DrawIoComponent} from './event-model/draw-io.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'pets',
    component: PetComponent,
  },
  {
    path: 'event-model',
    component: DrawIoComponent,
  },
];
