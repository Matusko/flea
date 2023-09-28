import { Route } from '@angular/router';
import {DrawIoComponent} from './draw-io/draw-io.component';

export const appRoutes: Route[] = [
  { path: 'event-model', component: DrawIoComponent },
];
