import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddlistService } from '../services/addlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
productList;
  constructor(private list:AddlistService ,private route:Router) { }
userName
  ngOnInit() {
    this.getData();
    this.list.getUser().subscribe(res=>{
      this.userName=res;
    })
  }
  getData(){
    this.list.getApiData().subscribe(res=>{
      console.log(res);
      this.productList=res;
    })
  }
  add(id,obj){
    let body={
      id:id,
      productName:obj.productName,
      count:++obj.count
    }
    this.list.updateApi(id,body).subscribe();
  }
  sub(id,obj){
    let count=--obj.count;
    if(count==0){
       let user=localStorage.getItem('Username');
      var storeData=JSON.parse(localStorage.getItem(user+"button"));
      var storeloc:any=JSON.parse(localStorage.getItem(user+"location"));
      let i:any=storeloc.indexOf(id);
  
      storeData[i]=0;
      console.log(id);
      
      localStorage.setItem(user+"button",JSON.stringify(storeData));

     this.list.deleteApi(id).subscribe(res=>{
       this.getData();
      console.log(res);
      
     });
     
    }
    else{
      let body={
        id:id,
        productName:obj.productName,
        count:count
      }
      this.list.updateApi(id,body).subscribe();
    }
   
  }
  delete(){
    localStorage.clear();
    this.list.deleteUser(1).subscribe();
    this.route.navigate(['/login']);
    }
}
