import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RootPageComponent } from './root-page/root-page.component';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.authService.isloggedIn){
      return true
    }
    else
    {
      return this.router.navigate(['signin']);

    }
  }

}
