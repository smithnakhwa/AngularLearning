import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-demouserdetails',
  templateUrl: './demouserdetails.component.html',
  styleUrls: ['./demouserdetails.component.css']
})
export class DemouserdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private user:DemoserviceService) { }
res;
  ngOnInit() {
   let id=this.route.snapshot.params['id'];
   this.user.getUserById(id).subscribe(res=>{
    console.log(res);
  this.res=res;
    
   })
  }

}
