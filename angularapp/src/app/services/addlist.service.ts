import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddlistService {
  apiUrl='http://localhost:3000/product';
  apiUser='http://localhost:3000/userDetials'
  constructor(private http:HttpClient) { }
  setApiData(value){
    return this.http.post(this.apiUrl,value);

  }
  getApiData(){
    return this.http.get(this.apiUrl);
  }
  updateApi(id,body){
    console.log(id);
    console.log(body);
    
    
    return this.http.put(this.apiUrl+'/'+id,body);
  }
  deleteApi(id){
   return this.http.delete(this.apiUrl+'/'+id);

  }
  getUser(){
    return this.http.get(this.apiUser);
  }
  postUser(body){
    return this.http.post(this.apiUser,body)
  }
 deleteUser(id){
  return this.http.delete(this.apiUser+'/'+id)
 }
}
