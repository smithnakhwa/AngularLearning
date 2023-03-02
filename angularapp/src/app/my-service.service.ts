import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

 showAge;
 products=[{
  name:'Mobile',
  id:1
 },{
  name:'laptop',
  id:2
 },{
  name:'Tv',
  id:3
 },{
  name:'Washing machine',
  id:4
 },

]
  constructor() { }
  ageCalculator(age:any):number{
    if(age){
      const convertAge = new Date(age);
      const timeDiff=Math.abs(Date.now()-convertAge.getTime());
     return  this.showAge=Math.floor(timeDiff/(1000*3600*24)/365);
    }
   }
   print(){
     alert('print method called');
   }
   display(){
    alert('display called');
   }
   
}
