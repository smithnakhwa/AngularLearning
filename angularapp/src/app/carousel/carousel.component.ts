import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items = [ 
    { image: '../../assets/images/book4.jpg', caption: 'Image 1' },
    { image: '../../assets/images/book2.jpg', caption: 'Image 2' },
    { image: '../../assets/images/book3.jpg', caption: 'Image 3' },
    { image: '../../assets/images/book3.jpg', caption: 'Image 4' }

  ];
  constructor() { }

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.slideToNext();
    }, 2000); // Adjust the time interval as needed (in milliseconds)
  }

  slideToNext() {
    const slideWidth = 100 / this.images.length;
    this.translateValue -= slideWidth;

    // Reset translateValue when reaching the end
    if (this.translateValue < -100) {
      this.translateValue = 0;
    }
  }

  pauseSlideShow() {
    clearInterval(this.slideInterval);
  }
  images = [
    '../../assets/images/book4.jpg',
    '../../assets/images/book2.jpg',
    '../../assets/images/book3.jpg',
    '../../assets/images/book1.jpg'
  ];
  translateValue = 0;
  slideInterval:any;

  

}
