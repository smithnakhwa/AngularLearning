import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {
  userData: Observable<firebase.User>;
  private apiUrl = 'http://localhost:3000/api';

  constructor(private fireauth:AngularFireAuth, private router:Router,private http:HttpClient) { 
    this.userData = fireauth.authState;

  }


  //Login
  // login(email:string,password:string){
  //   this.fireauth.auth.signInWithEmailAndPassword(email,password).then(()=>{
  //     localStorage.setItem('token','true');
  //     this.router.navigate(['/dash']);
  //   }).catch(
  //   err=>{
  //     alert(err.message);
  //     this.router.navigate(['/home']);
  //   })
  // }
  


//   //sign up method
//   register(email:string,password:string){
//     this.fireauth.auth.createUserWithEmailAndPassword(email,password).then(()=>{
// alert('Registeration Successsful');
//     }).catch(err=>{
//       alert(err.message);
//       this.router.navigate(['/resigter']);

//     }
//     );
//   }
register(email:string,password:string):Observable<any>{
  let body={
    username:email,
    password:password
  }
  
 return  this.http.post(`${this.apiUrl}/users`,body);
  }
  login(email,password){
  let body={
    username:email,
    password:password
  }
   return  this.http.post(`${this.apiUrl}/login`,body);
    }

    database(){
      return this.http.get(`${this.apiUrl}/test`);
    }


  //Sign Out

  logout(){
    this.fireauth.auth.signOut().then(()=>{
 localStorage.removeItem('token');
 this.router.navigate(['/home']);

    }).catch(err=>{
         alert(err.message);
    }
    );
  }
}
