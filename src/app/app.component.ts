import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone : true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]
})
export class AppComponent {
  title = 'user-registration-app';
  
  constructor(public auth: AuthService) {}


toggleLogin() {
  this.auth.isLoggedIn ? this.auth.logout() : this.auth.login();
}

}
