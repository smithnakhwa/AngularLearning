import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsiveheader',
  templateUrl: './responsiveheader.component.html',
  styleUrls: ['./responsiveheader.component.css']
})
export class ResponsiveheaderComponent implements OnInit {

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
