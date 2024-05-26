import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, PLATFORM_ID, Inject } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AuthService {

  private _registerUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient,@Inject(PLATFORM_ID) private platformId: Object) { }

  registerUser(signupModel: { email: string, password: string }) {
    return this.http.post<any>(`${this._registerUrl}/user/register`, signupModel);
  }

  loginUser(login: { email: string, password: string }) {
    return this.http.post<any>(`${this._registerUrl}/user/login`, login);
  }

  logoutUser() {
    sessionStorage.removeItem('access_token');
  }

 

}
