import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private tokenService:TokenService,private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isTokenPresent = this.tokenService.isTokenPresent();
    if (isTokenPresent) {
      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }else{
      this.router.navigate(['/login']);
    }

    return next.handle(req);
  }
}
