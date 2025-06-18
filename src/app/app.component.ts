import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-registration-app';
  
  isLoggedIn = false;

toggleLogin() {
  this.isLoggedIn = !this.isLoggedIn;
}

}
