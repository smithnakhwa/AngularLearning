import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostmanService {
url='https://devrunner.co.in/machine_test/index.php/web_api/Users/';
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(this.url);
  }
  delete(id):Observable<any>{
   let data={
    user_id:id
   }
  return this.http.request('DELETE',this.url+'remove_user',{body:data});
  }
  update(){
    return this.http.put(this.url+'update_user',
      {
        user_id:"95",
        user_name:"testpdate",
        user_email:"test@gmail.com",
        user_contact_no:"482600",
        user_password:"482600",
        user_gender:"male",
        
      }
    )

  }
  register(){
    let formData=new FormData();
    formData.append("user_name","smith");
    formData.append("user_email","Smith@gmail.com");
    formData.append("user_contact_no","gmail");

    formData.append("user_password","gmail");

    formData.append("user_gender","gmail");

    
   
    
    return this.http.post(this.url+'Register',formData);

  }
  login(){
    return this.http.get(this.url+'login',{params:{
      user_email:"Smith@gmail.com",
      user_pwd:"gmail",
    }})
  }
}
