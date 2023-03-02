import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 myReactiveForm:FormGroup;
 isSubmit:boolean=false;
 notAllowedNames=['codemind','Sevenmind']
  constructor(private _fb:FormBuilder) {
    this.createForm()
   }
 createForm(){
  // this.myReactiveForm= new FormGroup({
  //   'userDeatils':new FormGroup({ 'username':new FormControl(null,[Validators.required,this.naNames.bind(this)]),
  //   'email':new FormControl(null,[Validators.required],this.naEmail )}),
   
  //   'course': new FormControl('JavaScript'),
  //   'skills':new FormArray([
  //     new FormControl(null,[Validators.required])
  //   ])



  // });
  this.myReactiveForm=this._fb.group({
    userDeatils:this._fb.group({
      username:[null,[Validators.required,this.naNames.bind(this)]],
      email:[null,[Validators.required],this.naEmail]

    }),
    course:['JavaScript'],
    skills:this._fb.array([['',[Validators.required]]])



  })
 }
  ngOnInit() {
    // setTimeout(()=>{
    //   this.myReactiveForm.setValue({
    //     'userDeatils':{
    //       'username':'SMith',
    //       'email':'Smith@gail.com'

    //     },
    //     'course':'Angular',
    //     'skills':['Angular']

    //   })
    // },5000);
    // setTimeout(()=>{
    //   this.myReactiveForm.patchValue({
    //     'userDeatils':{
    //       'username':'Smith',
    //       'email':'Smith@gail.com'

    //     }


    //   })
    // },5000);
  }
  onSubmit(){
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm);
    this.isSubmit=true;
    
    
  }
 onSkills(){
  (<FormArray> this.myReactiveForm.get('skills')).push(this._fb.control(null,Validators.required));
 }
 naNames(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value) !== -1)
  {
    return {'namesNotAllowed':true}
  }
  else{
    return null;
  }
  
 }
 naEmail(control:FormControl):Promise<any>| Observable<any>{
  const myresponse=new Promise<any>((resolve,reject)=>{
    setTimeout(()=>{
      if(control.value=='Smith@gmail.com')
      {
        resolve({'emailNotAllowed': true});
      }
      else{
        resolve(null);
      }
    },100)
  });
  return myresponse;
 }
 age:Date;

}
