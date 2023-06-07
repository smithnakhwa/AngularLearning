import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url='gs://angular2023-a0b29.appspot.com';
  constructor(private http:HttpClient) { }

  createPost(data){
    const fd=new FormData();
    fd.append('image',data,data.name)
return this.http.post(this.url,fd);
  }
  getPost(){
    return this.http.get(this.url+'posts.json');
  }
}
