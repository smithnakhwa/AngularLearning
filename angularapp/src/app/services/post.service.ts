import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }
  getPost():Observable<any>{
   return this.http.get(this.url);
  }
  getPostById(id:number):Observable<any>{
   return this.http.get(this.url+'/'+id);
  }
}
