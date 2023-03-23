import { Component, OnInit } from '@angular/core';
// import { AuthIntterceptorService } from '../auth-interceptor.service';
import { WipiService } from '../wipi.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 searchRes;
  constructor(private wipi:WipiService) { }

  ngOnInit() {

    

  }
  getData(value){
  this.wipi.search=value;
    console.log('this is search value of aboutus',value);
    console.log('this is search value of interceptor',this.wipi.search);
    
    
    this.wipi.getData().subscribe((res)=>{
      this.searchRes=res;
      console.log(res);
      
      
    })

  }

}
