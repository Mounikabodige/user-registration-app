import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  isLoggedIn = false; 

  constructor(private auth : AuthService,private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn) {
      return true;
    } else {
      alert('Access denied. Please log in.');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
