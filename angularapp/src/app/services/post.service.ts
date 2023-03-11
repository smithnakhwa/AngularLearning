import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url='https://jsonplaceholder.typicode.com/posts'
  post:Observable<any>;
  fil;

  constructor(private http:HttpClient) {
   
    
   }
  getPost():Observable<any>{
   return this.http.post(this.url,{observe:[{
    id:1,
    type:'jeans',
    userId:1,
    companyName:'Denim'
  },
  {
    id:2,
    type:'jeans',
    userId:1,
    companyName:'Calvin Klein'
  },
  {
    id:3,
    type:'jeans',
    userId:1,
    companyName:'Levi'
  },
  {
    id:4,
    type:'jeans',
    userId:1,
    companyName:'Lee'
  },
  {
    id:5,
    type:'shirts',
    userId:2,
    companyName:'Adidas'
  },
  {
    id:6,
    type:'shirts',
    userId:2,
    companyName:'Gucci'
  },
  {
    id:7,
    type:'shirts',
    userId:2,
    companyName:'Tommy Hilfiger'
  },
  {
    id:8,
    type:'shirts',
    userId:2,
    companyName:'Allen solly'
  },
  {
    id:9,
    type:'shoes',
    userId:3,
    companyName:'Bata'
  },
  {
    id:10,
    type:'shoes',
    userId:3,
    companyName:'Puma'
  },
  {
    id:11,
    type:'shoes',
    userId:3,
    companyName:'Nike'
  },
  {
    id:12,
    type:'shoes',
    userId:3,
    companyName:'Woodland'
  },
  {
    id:13,
    type:'T-Shirts',
    userId:4,
    companyName:'Arrow'
  },
  {
    id:14,
    type:'T-Shirts',
    userId:4,
    companyName:'Flying Machine'
  },
  {
    id:15,
    type:'T-Shirts',
    userId:4,
    companyName:'Jack & Jones'
  },
  {
    id:16,
    type:'T-Shirts',
    userId:4,
    companyName:'Louis Philippe'
  }
]


  });
  }
  getPostById(id:number):Observable<any>{

    
    
    return this.http.put(this.url+'/'+id,{observe:this.fil})
    }
  }
