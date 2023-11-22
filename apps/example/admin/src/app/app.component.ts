import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'flea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apps/example/admin';

  constructor(
    private authService: AuthService
  ) {
    authService.isAuthenticated().then((res) => console.log(res));
  }

  login = (event: Event) => {
    this.authService.federatedSignIn().then((res) => console.log(res));
    console.log('clicked');
  }

  token = (event: Event) => {
    this.authService.currentSession().then(user => console.log(user));
  }

}
