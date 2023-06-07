import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YGuard implements CanActivate  {
  constructor(private route:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     if(sessionStorage.getItem('Username')){
      console.log(localStorage.getItem('username'),'true');
      
      return true;
     }
     else{
      console.log(localStorage.getItem('username'),'false');

      this.route.navigate(['/home']);
     }
  }
  
}
