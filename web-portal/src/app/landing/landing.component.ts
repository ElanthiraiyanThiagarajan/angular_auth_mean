import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private tokenService: TokenService) {

  }

  logOut() {
    this.tokenService.removeToken();
  }

}
