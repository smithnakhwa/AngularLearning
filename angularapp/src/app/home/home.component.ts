import { Component} from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private firebase:FirebaseService) { }
fname;
 ngOnInit(){
  console.log('this is onit');
  
 }

  getData(){
    this.firebase.getPost().pipe(map(x=>{
      // empty array
      let newarr=[];
      //for in loop
      for (const key in x) {
      //check the key
     if(x.hasOwnProperty(key)){
      //push the value intoarray
      newarr.push({... x[key],id:key});
     }
      }
      return newarr;
    
    })).subscribe(res=>{

      console.log('FireBase get',res);
      
    })
  }

}
