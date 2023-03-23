import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candeactivate } from '../interfaces/canDeactivate';
import { AddlistService } from '../services/addlist.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit ,Candeactivate{

  constructor(private _fb:FormBuilder,private list:AddlistService,private routes:Router) { }
  myReactiveForm:FormGroup;
  formvalid;
  Candeactivate(): boolean {
    return window.confirm('This is interface method do you want to leave');
}


  ngOnInit() {
    this.myReactiveForm=this._fb.group({
      email:[null,[Validators.email,Validators.required]],
      password:[null,[Validators.required,Validators.minLength(8)]]
    });
  }
  onSubmit(){
    console.log(this.myReactiveForm.valid);
    this.formvalid=this.myReactiveForm.valid;
    let value=this.email.value;
    console.log('this is control value',value);
    if(localStorage.getItem(this.email.value+"button")==null){
    localStorage.setItem(this.email.value+"button",JSON.stringify([]));
    localStorage.setItem(this.email.value+"location",JSON.stringify([]));
    localStorage.setItem("Username",this.email.value); 
    }
    let body={
      email:this.email.value
    }
   this.list.postUser(body).subscribe(res=>{
    console.log(res);
    
   })
    
    this.routes.navigate(['/home']);

    
  }
  get email(){
    return this.myReactiveForm.get('email');
  }
 get password(){
  return this.myReactiveForm.get('password');
 }


}
