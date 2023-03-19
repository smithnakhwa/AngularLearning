import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkuser(username,password){
    if(username=='Smith' && password=='Smith@123'){
     localStorage.setItem('username','smith');
     return true;
    }
    else{
      return false;
    }
  }
}
