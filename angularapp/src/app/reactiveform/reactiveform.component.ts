import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 myReactiveForm:FormGroup;
  constructor() {
    this.createForm()
   }
 createForm(){
  this.myReactiveForm= new FormGroup({
    'username':new FormControl(null),
    'email':new FormControl(null),
    'course': new FormControl('Angular'),
    'gender':new FormControl(null)

  });
 }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.myReactiveForm.value);
    
  }

}
