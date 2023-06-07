import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchService } from '../fetch.service';
import { FirebaseauthService } from '../firebaseauth.service';
import {AngularFireStorage} from '@angular/fire/storage'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myLoginForm:FormGroup;
selectedFile:File;
data=[];
  constructor(private _fb:FormBuilder,private route:Router,private auth:FirebaseauthService, private af:AngularFireStorage) { 
    this.createForm();
  }
createForm(){
  this.myLoginForm=this._fb.group({
    // email:[null,[Validators.email,Validators.required,this.checkEmail.bind(this)]],
    email:[null,[Validators.email,Validators.required]],

    // password:[null,[Validators.minLength(8),Validators.required,this.checkPassword.bind(this)]]
    password:[null,[Validators.minLength(8),Validators.required]]

  })
}
onChange(event){
  console.log(event);
  
this.selectedFile= event.target.files[0];
console.log(this.selectedFile);

}
onClick(){

 this.af.upload("/files"+Math.random()+this.selectedFile.name,this.selectedFile);
}
  ngOnInit() {

this.auth.database().subscribe(res=>{
  console.log(res);
  
})
  }
  get email(){
    return this.myLoginForm.get('email');
  }
  
 get password(){
  return this.myLoginForm.get('password');
 }
 onSubmit(){
  console.log('smith');
  
  let pass=this.password.value;
  let mail=this.email.value;
  this.auth.login(mail,pass).subscribe(res=>{
    console.log(res);
    
  });
 

 }
 toreg(){
  this.route.navigate(['/resigter']);
 }
 checkEmail(){
  let token=0;
  let list=this.data;
  console.log(this.data);
  
  for (let index = 0; index < list.length; index++) {
    const element = this.data[index];
    if(this.email.value===element.email)
    {
      token=1;
      console.log('true');
      
      break;
    }
    
  }
  if(token==1){
    return null;
  }
  else{ 
    return {'noEmail':true};
  }
 }
 checkPassword(){
  let token=0;
  let list=this.data;
  console.log(this.data);
  
  for (let index = 0; index < list.length; index++) {
    const element = this.data[index];
    if(this.password.value==element.password)
    {
      token=1;
      console.log('true');
      break;
    }
  }
  if(token==1){
    return null;
  }
  else{ 
    return {'noPass':true};
  }
 }
}



