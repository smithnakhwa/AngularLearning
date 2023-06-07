import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild('carousel', {static: false}) private carousel: ElementRef;   constructor() { }

  ngOnInit() {
  }

 
  ngAfterViewInit(): void {
    // Initialize the Bootstrap carousel
    $(this.carousel.nativeElement).carousel({
      interval: 2000, // Adjust the interval time as desired (in milliseconds)
      ride: 'carousel',
      wrap: true
    });

}
}
