import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
apiUrl='http://localhost:3000/todos';
  constructor(private httpClient:HttpClient) { }
  //create method
  create(data){
    return this.httpClient.post(this.apiUrl,data);
  }
  update(id,data){
   return  this.httpClient.put(this.apiUrl+'/'+id,data);
  }
  fetch(){
  return  this.httpClient.get(this.apiUrl);
  }
  delete(id){
    return  this.httpClient.delete(this.apiUrl+'/'+id);
  }
}
