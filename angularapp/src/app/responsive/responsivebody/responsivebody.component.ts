import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsivebody',
  templateUrl: './responsivebody.component.html',
  styleUrls: ['./responsivebody.component.css']
})
export class ResponsivebodyComponent implements OnInit {
  constructor(private response:BreakpointObserver) { }
mobile=false;
tablet=false;
  ngOnInit() {
    this.response.observe(Breakpoints.Handset).subscribe(res=>{
      if(res.matches){
      this.mobile=res.matches;
      console.log(this.mobile);
      


      }
      else{
        this.mobile=false
      }
    });
    this.response.observe(Breakpoints.TabletPortrait).subscribe(res=>{
      if(res.matches){
      this.tablet=res.matches;
      console.log('this is tablet',this.tablet);
      


      }
      else{
        this.tablet=false
      }});
  }
}
