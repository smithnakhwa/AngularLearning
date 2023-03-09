import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  constructor(private postservice:PostService) { }
 arrPost:Posts[]=[];
  ngOnInit() {
    this.postservice.getPost().subscribe(res=>{
      this.arrPost=res;
      console.log('post array data ',res);
      

    })
  }

}
