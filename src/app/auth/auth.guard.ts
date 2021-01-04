import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    const url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true|UrlTree {
    if (this.authService.isLoggedIn) { 
      console.log("CanActivate accespted");
      return true; 
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;  

    // Redirect to the login page
    return this.router.parseUrl('/login');
  }
  
}
