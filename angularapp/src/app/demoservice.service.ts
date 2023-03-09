import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
 apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }
  getUsers(){
   return this.httpClient.get(this.apiUrl);
  }
  getUserById(id:number){
    return this.httpClient.get(this.apiUrl+'/'+id)
  }
}
