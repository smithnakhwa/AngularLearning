import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WipiService {
url='https://en.wikipedia.org/w/api.php';
  constructor(private http:HttpClient) { }
search;
  getData(){

    return this.http.get(this.url,{params:{
      action:'query',
      format:'json',
      list:'search',
      utf8:'1',
      srsearch:'space',
      origin:'*'

    }});
  }
}
