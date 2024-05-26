import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    const status = localStorage.getItem('loginstatus');

    if (status !== 'success' && url.includes('/landing')) {
      console.log(status);
      this.router.navigate(['/']);
      return false;
    }

    // if (this.tokenService.getRefreshToken()) {
    //   return true;
    // }


    return true;
  }


}
