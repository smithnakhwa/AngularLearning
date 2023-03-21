import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddlistService } from './services/addlist.service';

@Injectable({
  providedIn: 'root'
})
export class LogincheckGuard implements CanActivate {
  user;
  constructor(private list:AddlistService,private routes:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
    if(localStorage.getItem("Username")!=null)
    {
      return true
    }
    else{
      this.routes.navigate(['/login']);
      return false;

    }
  }
  
}
