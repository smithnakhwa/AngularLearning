import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-funnels',
  templateUrl: './funnels.component.html',
  styleUrls: ['./funnels.component.css'],
  

})
export class FunnelsComponent implements OnInit {
  @ViewChild('ngcarousel', { static: false }) ngCarousel!: NgbCarousel;
  constructor(private response:BreakpointObserver) { }
mobile=false;
tablet=false;
showNavigationArrows = false;
showNavigationIndicators = false;
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
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
  getToPrev():void{
    this.ngCarousel.prev();
  }
  // Move to next slide
  goToNext():void {
    this.ngCarousel.next();
  }



}
