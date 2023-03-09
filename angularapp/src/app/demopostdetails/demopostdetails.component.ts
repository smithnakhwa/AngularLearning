import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private postservice:PostService) { }
   post;
  ngOnInit() {
    let id =this.route.snapshot.params['id'];
    this.postservice.getPostById(id).subscribe(res=>{
      this.post=res;
      console.log('get post by id',res);
      
    })
    console.log(id);
    
  }

}
