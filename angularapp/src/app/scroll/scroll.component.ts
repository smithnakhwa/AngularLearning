import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  wheel(){
    const scrollContainer = document.querySelector("main");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
    document.addEventListener('mousemove',e=>{
    
      console.clear();
      console.log(document.elementsFromPoint(e.clientX,e.clientY));
      console.log(e.clientX,e.clientY);
      
      

    },{passive:true})
    document.getElementById('moveme').onmousemove=function(e){
      console.log(e.clientX,e.clientY);
      
      
    }
  
  }

}
