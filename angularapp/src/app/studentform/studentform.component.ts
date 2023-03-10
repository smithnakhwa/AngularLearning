import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  constructor(private objservice:MyServiceService,private router:Router) { }
  formData={
    firstname:'',
    middlename:'',
    lastname:'',
    studnum:'',
    pincode:''

  }
  isSubmitted:boolean =false;

  ngOnInit() {

    this.objservice.print();
  }
  onClick(form: NgForm){
    this.router.navigate(['/usersdetails']);
    console.log(form);
    this.formData.firstname=form.value.firstname;
    this.formData.middlename=form.value.middlename;
    this.formData.lastname=form.value.lastname;
    this.formData.studnum=form.value.studnum;
    this.formData.pincode=form.value.pincode;


    this.isSubmitted=true;
    form.reset();
    
    // other ways to using setValue() or patchValue();
    // form.reset();
    // form.controls['select'].setValue('Angular');
    // form.controls['gender'].patchValue('female');
    

  }
  default="Angular";
  defaultgender="female";
  genders=[
    {
      id:1,
      value:'Male'
    },
    {
      id:2,
      value:'female'
    }
  ];
  courses=['Angular','JavaScript','TypeScript'];
  blur(email){
    if(email.value.substr()){}
  }
  calculateAge(){
   
    this.showAge=this.objservice.ageCalculator(this.age);

  }
  age;
  showAge;
}
