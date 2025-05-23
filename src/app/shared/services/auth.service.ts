import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }

  getAuthStatus(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
