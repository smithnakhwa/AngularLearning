import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchService } from '../fetch.service';
import { FirebaseauthService } from '../firebaseauth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
myregisterationForm:FormGroup;
  constructor(private _fb:FormBuilder,private route:Router,private auth:FirebaseauthService) { 
    this.createForm();
  }

  ngOnInit() {
    
    


  }
  createForm(){
    this.myregisterationForm=this._fb.group({
      email:[null,[Validators.email,Validators.required]],
      name:[null,[Validators.required]],
      mobile:[null,[Validators.required,Validators.minLength(10)]],
      password:[null,[Validators.minLength(8),Validators.required]]
    })
  }
  get email(){
    return this.myregisterationForm.get('email');
  }
  get name(){
    return this.myregisterationForm.get('name');
  }
  get mobile(){
    return this.myregisterationForm.get('mobile');
  }
  get password(){
    return this.myregisterationForm.get('password');
  }
 onClick(){

  this.route.navigate(['/home'])
 }
 onSubmit(){
  let mail=this.email.value;
  let pass=this.password.value;
  this.auth.register(mail,pass).subscribe(res=>{
    console.log(res);
    
  }); 


  let control: AbstractControl = null;
  this.myregisterationForm.reset();
  this.myregisterationForm.markAsUntouched();
  Object.keys(this.myregisterationForm.controls).forEach((name) => {
    control = this.myregisterationForm.controls[name];
    control.setErrors(null);
  });
 
 }
}
