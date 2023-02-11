import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstylengclass',
  templateUrl: './ngstylengclass.component.html',
  styleUrls: ['./ngstylengclass.component.css']
})
export class NgstylengclassComponent implements OnInit {
 password:string;
 count=1;
 backgroundcolor:string='none';
 arrayOfnum=[];
 arrayOfTime=['0'];
 onClick(){
  this.arrayOfnum.push(this.count);
  this.password='Tuna';
  this.count++;
  let date=new Date();
  let num=date.getHours();
  if(num>12){
    num-=12;
  
  }
   this.arrayOfTime.push(num+":"+date.getMinutes()+":"+date.getSeconds());
 }
  constructor() { }

  ngOnInit() {
  }

    checkcount(val){
      console.log(val);
      
      if(val>=5){
          this.password='Smith@53ygd';
          this.backgroundcolor="blue";
        return true;
      }
      else
      {
        return false;
      }
    }


}
