import { Component,Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;


  constructor(private _auth: AuthService,private _router:Router,private _tokenService:TokenService){
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this._auth.loginUser(this.loginForm.value).subscribe((res) => {
      this._tokenService.saveToken(res.token);
      this._router.navigate(['./landing/special-events']);
    }, (err) => { console.log(err) });
  }

  onRegister() {
    this._router.navigate(['/register']);
  }

}
