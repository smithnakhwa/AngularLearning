import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddlistService } from '../services/addlist.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  altbtn;
  id;
  user;

  constructor(private list:AddlistService,private route:Router) {
   
  }

  count=1;
  ngOnInit() {
    this.user=localStorage.getItem('Username');
    var storeData=JSON.parse(localStorage.getItem(this.user+"button"));
    var storeloc=JSON.parse(localStorage.getItem(this.user+"location"));
    if( storeData != null){
      this.altbtn=storeData;
      this.id=storeloc;
    }
    else{
      this.altbtn=[0,0,0,0];
      this.id=[];
    }
     

  }
  onClick(){
    this.route.navigate(['/cart']);

  }

// addCount(ind,value){
 
 
//   var add={
//     productName:value,
//     count:++this.altbtn[ind]
//   }
//   if(  localStorage.getItem(this.user+"button")!=null && typeof localStorage.getItem(this.user+"button")!="string"){
//     this.altbtn=localStorage.getItem(this.user+"button");
//     this.id=localStorage.getItem(this.user+"location");
//   }
  

  
//   this.list.updateApi(this.id[ind],add).subscribe(res=>{
//     console.log('++',res);
    
//   })



// }
// subCount(index,value){
//   var sub={
   
//     productName:value,
//     count:--this.altbtn[index]
//   }
//   if(  localStorage.getItem(this.user+"button")!=null && typeof localStorage.getItem(this.user+"button")!="string"){
//     this.altbtn=localStorage.getItem(this.user+"button");
//     this.id=localStorage.getItem(this.user+"location");
//   }

//   this.list.updateApi(this.id[index],sub).subscribe(res=>{
//     console.log('--',res);
    
//   })

// }
OnFirstAdd(index1,value){
  this.altbtn[index1]=1;
  this.id[index1]=this.count++;
  localStorage.setItem(this.user+"button",JSON.stringify(this.altbtn));
  localStorage.setItem(this.user+"location",JSON.stringify(this.id));

 
  let first={
   
    productName:value,
    count:this.altbtn[index1]
  }

  this.list.setApiData(first).subscribe(res=>{
    console.log('This first data',res);
    
  })
}

}
