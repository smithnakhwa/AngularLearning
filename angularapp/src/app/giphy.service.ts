import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
url='https://api.giphy.com/v1/gifs/';
searchterm:Subject<any>=new Subject<any>();
offv='0';
  constructor(private http:HttpClient) { }
  getData(thing,qr):Observable<any>{
  
    return this.http.get(this.url+thing,{params:{
      api_key:'9Xh25e4UZ1YNGcJJGJqF5pcO1ec8C4uz',
      limit:'10',
     offset:this.offv,
    q:qr,
    rating:'g'
   }});
  }
}
