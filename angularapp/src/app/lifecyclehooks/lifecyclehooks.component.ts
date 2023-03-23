import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,OnChanges,DoCheck{
@Input() parentData:string;
  constructor() {
    console.log('LifecyclehooksComponent constructor is called');
    
   }
  ngDoCheck(): void {
    console.log('LifecyclehooksComponent ngDoCheck is called');

  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('LifecyclehooksComponent ngOnChanges is called',changes);
   for (const key in changes) {
   
    if (Object.prototype.hasOwnProperty.call(changes, key)) {
      iterate(changes[key])
     
      
    }
   }
   function iterate(obj){
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(`${key},${obj[key]}`);
        
        
      }
    }

   }

   
  }


  ngOnInit() {
    console.log('LifecyclehooksComponent ngOnInit is called');
  }

}
