import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor() {
    }


  //mock service
// url=" http://localhost:3000/data"
//   constructor(private http:HttpClient) { }
//   getData():Observable<any>{
//  return this.http.get(this.url);
//   }
//   create(body):Observable<any>{
//     return this.http.post(this.url,body);
//   }

}
