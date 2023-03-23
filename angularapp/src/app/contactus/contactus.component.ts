import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { Candeactivate } from '../interfaces/canDeactivate';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit,Candeactivate {

  constructor(private demoService:DemoserviceService) { }
  Candeactivate(): boolean {
       return window.confirm('This is interface method do you want to leave');
  }

  ngOnInit() {
  }
  onClick(){
  this.demoService.url='https://jsonplaceholder.typicode.com/users';
  }
}
