import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  product=[
    {name:'Laptop',id:'101'},
    {name:'Mobile',id:'102'}
  ]
 url:string;
  constructor(private httpClient: HttpClient) { }
  getUsers(){
   return this.httpClient.get(this.url);
  }
  getUserById(id:number){
    return this.httpClient.get(this.url+'/'+id)
  }
}
