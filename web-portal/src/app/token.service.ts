import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

@Injectable()
export class TokenService {

  constructor(private router:Router) { }

  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  isTokenPresent(): boolean {
    return localStorage.getItem(ACCESS_TOKEN)!== null;
  }

  getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  saveToken(token): void {
    localStorage.setItem(ACCESS_TOKEN, token);
    localStorage.setItem('loginstatus', 'success');
  }

  saveRefreshToken(refreshToken): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem('loginstatus');
    this.router.navigate(['/login'])


  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }

}
