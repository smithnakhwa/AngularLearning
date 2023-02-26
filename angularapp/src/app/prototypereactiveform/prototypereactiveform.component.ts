import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prototypereactiveform',
  templateUrl: './prototypereactiveform.component.html',
  styleUrls: ['./prototypereactiveform.component.css']
})
export class PrototypereactiveformComponent implements OnInit {
  myreactiveFrom:FormGroup;
  genders=['Male','Female','other'];
  countries=[{
    id:	93,
    value:'Afghanistan'

  },
  {
    id:		33,
    value:'Bangladesh'

  },
  {
    id:	93,
    value:'France'

  },
  {
    id:		49,
    value:'Germany'

  },
  {
    id:	91,
    value:'India'

  },
  {
    id:	598,
    value:'Uruguay'

  },
  {
    id:	1,
    value:'United States'

  }
];
unqiue=[];
  constructor() {
    this.createForm();

   }
   createForm(){
    this.myreactiveFrom=new FormGroup({
      'userDetails':new FormGroup({
        'fullName':new FormControl(null,[Validators.required]),
        'birthday':new FormControl('',[Validators.required]),
        'gender':new FormControl(null,[Validators.required]),
        'country':new FormControl(null,[Validators.required]),
        'phone':new FormControl(null,[Validators.required]),
        'bio':new FormControl('Lorem ipsum is simply dummy text  of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text ever since the 1500s',[Validators.maxLength(256)]),
      }),
      'accountDetails':new FormGroup({
        'userName':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern("^(?=.*?[0-9])(?=.*[a-z])[a-zA-Z\d].{3,}$")]),
        'email':new FormControl(null,[Validators.required,Validators.email])  ,
        'password':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern("^(?=.*?[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d].{3,}$")]),
        'confirmPassword':new FormControl(null,[Validators.required]),
        'term':new FormControl(null),
       
      })

    
      
    });

   }
   onSubmit(){
    console.log(this.myreactiveFrom);
    
    
    
    
    
   }
   isPhone:boolean;
   isHint:boolean;

  ngOnInit() {
  }
  onPhoneCheck(){
    let len=this.myreactiveFrom.get('userDetails.country').value.length;
    let str=this.myreactiveFrom.get('userDetails.phone').value.slice(0,len);
  
    if(this.myreactiveFrom.get('userDetails.country').value!=str)
    {
          this.isPhone=true; 
          this.isHint=false;
          
    }
    else{
      this.isPhone=false;
      this.isHint=true;
    }

    

  }
  isMatch:boolean;
  isMatchsuc:boolean;
  onMatch(){
    if(this.myreactiveFrom.get('accountDetails.password').value!=this.myreactiveFrom.get('accountDetails.confirmPassword').value)
    {
      this.isMatch=true;
      this.isMatchsuc=false;

    }
    else{
            this.isMatch=false;
            this.isMatchsuc=true;
    }
  }
  isUnqiue:boolean;
  onUnqiue(){
    if(this.unqiue.includes(this.myreactiveFrom.get('accountDetails.userName').value))
    {
      this.isUnqiue=true;
    }
    else{
      this.isUnqiue=false;
    }
  }
  onClick(){
  this.unqiue.push(this.myreactiveFrom.get('accountDetails.userName').value);
  console.log(this.unqiue);
  
    

  }

}
