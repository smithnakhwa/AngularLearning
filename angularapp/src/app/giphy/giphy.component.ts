import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { debounceTime, map, share } from 'rxjs/operators';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
gifs=[];
title='';
result='trending?';
off=0;
loading=true;
  constructor(private giphy:GiphyService) { }
loadin(){
  this.loading=false;
}
  ngOnInit() {
   this.loading=true;
    this.giphy.getData(this.result,this.title).pipe(map(x=>{ return x.data})).subscribe(res=>{
      if(res){
        this.loadin();
      }
      console.log(res);
      this.gifs=res;
      console.log(this.gifs);
      
      

      
    })  }

    onClick(val){
      this.gifs=[];
      this.giphy.offv=val.toString();
      this.off=val;
      this.loading=true;

      
    this.giphy.getData(this.result,this.title).pipe(map(x=>{ return x.data}),share()).subscribe(res=>{
      if(res){
        this.loadin();
      }
      console.log(res);
      this.gifs=res;
      console.log(this.gifs);
      
      

      
    }) ;
    }
    onPre(){
      let pre=this.off-10;
      this.gifs=[];
     if(pre<0){
      this.giphy.offv='90';
      this.off=90;
      this.loading=true;

      
    this.giphy.getData(this.result,this.title).pipe(map(x=>{ return x.data}),share()).subscribe(res=>{
      if(res){
        this.loadin();
      }
      console.log(res);
      this.gifs=res;
      console.log(this.gifs);
      
      

      
    }) 

     }
     else{
      this.gifs=[];
        this.giphy.offv=pre.toString();
        this.loading=true;
        this.off=pre;

        this.giphy.getData(this.result,this.title).pipe(map(x=>{ return x.data}),share()).subscribe(res=>{
          if(res){
            this.loadin();
          }
          console.log(res);
          this.gifs=res;
          console.log(this.gifs);
          
          
    
          
        }) 
     }
    }
    onNext(){
      this.gifs=[];
      let next=this.off+10;
      if(next>=100){
        this.giphy.offv='0';
        this.loading=true;
        this.off=0;

        this.giphy.getData(this.result,this.title).pipe(map(x=>{ return x.data}),share()).subscribe(res=>{
          if(res){
            this.loadin();
          }
          this.gifs=res;
          
          
          
    
          
        }) 
      }
      else{
        this.gifs=[];
        this.giphy.offv=next.toString();
        this.loading=true;
         this.off=next;
        this.giphy.getData(this.result,this.title).pipe(map(x=>{ return x.data})).subscribe(res=>{
          if(res){
            this.loadin();
          }
          this.gifs=res;
          
          
          
    
          
        }) 
      }
    }
    //this below code is for search
    onSearch(){
      if(this.title==''){
        this.gifs=[];
        this.result='trending?'
        this.loading=true;

     
        this.giphy.getData(this.result,this.title).pipe(debounceTime(1000),map(x=>{ return x.data}),share()).subscribe(res=>{
          if(res){
            this.loadin();
          }
          console.log(res);
          this.gifs=res;
          console.log(this.gifs);
          
          
    
          
        })
      }
      else{
        this.gifs=[];
        this.result='search?';
        this.loading=true;
        this.giphy.getData(this.result,this.title).pipe(debounceTime(1500),map(x=>{ return x.data}),share()).subscribe(res=>{
          if(res){
            this.loadin();
          }
          console.log(res);
          this.gifs=res;
          console.log(this.gifs);
      })
    }
  }

}
