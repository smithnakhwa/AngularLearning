import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Candeactivate } from './interfaces/canDeactivate';

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<Candeactivate> {
  canDeactivate(component: Candeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.Candeactivate();
  }
  
}
  