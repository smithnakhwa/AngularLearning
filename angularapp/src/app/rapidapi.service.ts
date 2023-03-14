import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RapidapiService {
  url='https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US'

  constructor(private http:HttpClient) { }
  getFinance(){
    let header=new HttpHeaders({
      "X-RapidAPI-Key": "a73452e8bfmsh4b6b8cdca76f781p1e6c97jsnebd5363f009d",
		"X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    })
   return this.http.get(this.url,{headers:header});
  }
}
