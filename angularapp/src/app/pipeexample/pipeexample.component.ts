import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
 todaysDate=new Date();
  constructor() { }
  price:number=700000;
  count:number=500;
  employee={
    empid:'1',
    empname:'smith'
  }

  ngOnInit() {
    console.log(this.todaysDate);
    
  }

}
