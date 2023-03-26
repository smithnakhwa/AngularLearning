import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ViewChild,ElementRef, Input, OnChanges, OnInit, SimpleChanges, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
@ContentChild("child",{static:false}) contentChild:ElementRef;
  @Input() parentData:string;
  @ViewChild("childHook",{static:false}) viewChild:ElementRef;
  counter;
  subscription:Subscription;
  num:number=1;
  constructor(private demoService:DemoserviceService) {
    console.log('LifecyclehooksComponent constructor is called');
    
   }
  ngOnDestroy(): void {
    console.log('LifecyclehooksComponent ngOnDestroy is called');
    clearInterval(this.counter);
    console.log(this.subscription);
    
    this.subscription.unsubscribe();
    console.log(this.subscription);

  }
  ngAfterViewChecked(): void {
    console.log('LifecyclehooksComponent ngAfterViewChecked is called',this.viewChild);
    this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`);  }
  ngAfterViewInit(): void {
    console.log('LifecyclehooksComponent ngAfterViewInit is called',this.viewChild);
    this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`);


  }
  ngAfterContentChecked(): void {
    console.log('LifecyclehooksComponent ngAfterContentChecked is called',this.contentChild);
    this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);  }
  ngAfterContentInit(): void {
    console.log('LifecyclehooksComponent ngAfterContentInit is called',this.contentChild);
    this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
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
   this.subscription= this.demoService.getUsers().subscribe(res=>{      console.log('this is onint hooks',res);
  }
      )
    
    // this.counter= setInterval(()=>{
    //   this.num+=1;
    //   console.log(this.num);
      
    // },1000);
  }

}
