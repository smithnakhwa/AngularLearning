import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-fashiondetails',
  templateUrl: './fashiondetails.component.html',
  styleUrls: ['./fashiondetails.component.css']
})
export class FashiondetailsComponent implements OnInit {

  constructor(private rotuer:ActivatedRoute,private post:PostService) { }
  arr;
  fashiondetails='';
  ngOnInit() {
    let id=null;
     id=this.rotuer.snapshot.params['id'];
    let newarr;
    console.log(id);
    
    this.post.getPost().subscribe(res=>{
      this.arr=res.observe;
      newarr=this.arr.filter((obj)=>{
          return obj.id==id;
      })[0];
      console.log(newarr);
      this.post.fil={};
      
      this.post.fil=newarr;
      this.post.getPostById(id).subscribe(res=>{
        this.fashiondetails=res.observe;
        console.log(this.fashiondetails);
      
    });
   
      
      
      
    });
  }

}
