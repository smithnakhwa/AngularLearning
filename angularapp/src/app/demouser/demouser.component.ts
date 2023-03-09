import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-demouser',
  templateUrl: './demouser.component.html',
  styleUrls: ['./demouser.component.css']
})
export class DemouserComponent implements OnInit {
users;
  constructor(private user:DemoserviceService) { }

  ngOnInit() {
    this.user.getUsers().subscribe(res=>{
   this.users=res;
      console.log(res);
      
    })
  }

}
