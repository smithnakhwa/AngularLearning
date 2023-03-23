import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoComponent } from '../demo/demo.component';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user:any;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
   this.user=this.activateRoute.snapshot.data['data'];
   console.log(this.user);
   
   
  }


}
