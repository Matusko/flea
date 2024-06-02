import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AuthService} from '../../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog, private authService: AuthService) {
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
