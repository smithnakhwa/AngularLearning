import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, interval, of, timer } from 'rxjs';
import { map, mergeMap, take, takeLast, takeUntil } from 'rxjs/operators';
interface User{
  id:number;
}
interface Post{
  id:number;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
width;
height;
  constructor(private http:HttpClient,private response:BreakpointObserver) {
    const users=http.get<User[]>(this.USER);
    const pots=http.get<Post[]>(this.POSTS);
    forkJoin([users,pots]).subscribe(res=>{
      console.log('ForkJoin',res);
      
    })
   }
 USER='https://jsonplaceholder.typicode.com/posts';
 POSTS='https://jsonplaceholder.typicode.com/users';
 data:[User[],Post[]];
 getData(data){
  return of(data+' video upload');
 }
  ngOnInit() {
     this.response.observe(Breakpoints.Handset).subscribe(res=>
      {
        if(res.matches){
          console.log('this is mobile');
          
        }
      })
    //mergeMap
        const obs1=from(['Tech','Comedy','News']);
        obs1.pipe(mergeMap(res=>this.getData(res))).subscribe(res=>{
          console.log('MergeMap',res);
          
        }
          )
    //nested observale

    // obs1.pipe(map(res=>this.getData(res))).subscribe(res=>{
    //   res.subscribe(res=>{
    //     console.log(res);
        
    //   })
      
    // })
    //of custom Observable
    const ofobs=of([1,2,3]);
    ofobs.subscribe(res=>{
      console.log('of example',res);
      
    });
        //from custom Observable

    const fromObs=from([1,2,3]);
    fromObs.subscribe(res=>{
      console.log('from example',res);
      
    });
    //Take operater
    const source=interval(1000);
    fromObs.pipe(take(1)).subscribe(res=>{
      console.log('take operator',res);
      
    
      
    });

    //takeLast Operator
    let randomNames=['smith','nakhwa','codemind','hello'];
    const result=from(randomNames);
    result.pipe(takeLast(2)).subscribe(res=>{
      console.log('takeLast operator',res);
      
    
      
    });
    //TakeUntil
    const custObs=interval(1000);
    let condition=timer(2000);
    custObs.pipe(takeUntil(condition)).subscribe(res=>
      {
        console.log('take until operater',res);
       
        
        
      })
    
  }


}
