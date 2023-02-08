import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  
 arrayOfLetter=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
 arrayOfNumer=['0','1','2','3','4','5','6','7','8','9'];
 arrayOfSpecial=['?','!','@','#','$','%','^','&','*','+','-','_'];
 length:number;
 result:string;
 arrayOfResult=[];
  constructor() { }
  stringLength(val){
  this.length=val.target.value;
  console.log(this.length,val.target.value);
  
  }
  onLetter(){
    if(this.arrayOfResult.includes(this.arrayOfLetter)==true)
    {
      let index=this.arrayOfResult.indexOf(this.arrayOfLetter);
         this.arrayOfResult.splice(index,1)
    }
    else{
      this.arrayOfResult.push(this.arrayOfLetter);
    }
  
   
  
  }
  onNumber(){
    if(this.arrayOfResult.includes(this.arrayOfNumer)==true)
    {
      let index=this.arrayOfResult.indexOf(this.arrayOfNumer);
         this.arrayOfResult.splice(index,1)
    }
    else{
      this.arrayOfResult.push(this.arrayOfNumer);
    }
  }
  onSpecial(){
    if(this.arrayOfResult.includes(this.arrayOfSpecial)==true)
    {
      let index=this.arrayOfResult.indexOf(this.arrayOfSpecial);
         this.arrayOfResult.splice(index,1)
    }
    else{
      this.arrayOfResult.push(this.arrayOfSpecial);
    }
  }
  ngOnInit() {
  }
  Generate(){
    let temp="";
    for (let index = 0; index < this.length; index++) {
      let element=this.arrayOfResult[Math.round(Math.random()*(this.arrayOfResult.length-1))];
      let char=element[Math.round(Math.random()*(element.length-1))];
      temp+=char;
    }
    this.result=temp;
  }

}
