import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 myReactiveForm:FormGroup;
 isSubmit:boolean=false;
  constructor() {
    this.createForm()
   }
 createForm(){
  this.myReactiveForm= new FormGroup({
    'userDeatils':new FormGroup({ 'username':new FormControl(null),
    'email':new FormControl(null,[Validators.required,Validators.email] ),}),
   
    'course': new FormControl('Angular'),
    'Male':new FormControl(null),
    'Female':new FormControl(null),



  });
 }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm);
    this.isSubmit=true;
    
    
  }

}
