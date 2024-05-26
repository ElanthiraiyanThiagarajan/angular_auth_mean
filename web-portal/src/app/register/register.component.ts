import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signupForm: FormGroup;


  constructor(private _auth: AuthService, private _router: Router,private _tokenService: TokenService) {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this._auth.registerUser(this.signupForm.value).subscribe((res) => {
      this._tokenService.saveToken(res.token);
      this._router.navigate(['/special-events']);
    }, (err) => { console.log(err) });
  }

}
