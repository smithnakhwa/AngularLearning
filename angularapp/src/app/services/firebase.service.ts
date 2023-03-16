import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url='https://angular2023-a0b29-default-rtdb.firebaseio.com/';
  constructor(private http:HttpClient) { }

  createPost(){
    let postData={
      title:'This is Firebase example',
      content:'We are calling angular post method'
  }

return this.http.post(this.url+'posts.json',postData);
  }
  getPost(){
    return this.http.get(this.url+'posts.json');
  }
}
