import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoserviceService } from './demoservice.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private demoService:DemoserviceService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.demoService.getUsers();
  }
  
}
