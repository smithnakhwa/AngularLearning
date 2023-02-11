import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  selectProduct:string;
 courses: any[]=[
  {id:1,
  desc:'Angular Core Deep Dive',
  iconUrl:'',
  category:'Intermediate'
 
 },
 {
  id:2,
  desc:'JavaScript',
  iconUrl:'',
  category:'easy'
 },
 {
  id:3,
  desc:'typeScript',
  iconUrl:'',
  category:'Advance'
 },
 {
  id:4,
  desc:'Java',
  iconUrl:'',
  
 }

]
  constructor() { }

  ngOnInit() {
  }
  oChange(val){
 this.selectProduct=val.target.value;
  }
}
