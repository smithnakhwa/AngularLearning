import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
flagName;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    let pos= document.getElementById('flg');
    if(sessionStorage.getItem('position')){
      let ln=sessionStorage.getItem('position');
      pos.style.backgroundPositionY=ln;
      this.flagName=sessionStorage.getItem('flgname');

      
    }
    else{
      pos.style.backgroundPositionY='-26px';
      this.flagName='English';

    }
   
  }
  changeEN(){
    this.translateService.use('en').subscribe(()=>{

    });
    sessionStorage.setItem('lang','en');
    let color=document.getElementById('flg');
    
    color.style.backgroundPositionY='-26px';
    sessionStorage.setItem('position','-26px');
    sessionStorage.setItem('flgname','English');
    this.flagName='English';


  }
  changePR(){
    this.translateService.use('pr').subscribe(()=>{
  

    });
    let color=document.getElementById('flg');
    color.style.backgroundPositionY='0px';
    sessionStorage.setItem('lang','pr');
    sessionStorage.setItem('position','0px');
    sessionStorage.setItem('flgname','Português');
    this.flagName='Português';

    

  }
  changeES(){
    this.translateService.use('es').subscribe(()=>{


    });
          sessionStorage.setItem('lang','es');
          let color=document.getElementById('flg');
          color.style.backgroundPositionY='-52px';
          sessionStorage.setItem('position','-52px');
          sessionStorage.setItem('flgname','Español');
          this.flagName='Español';


        }


}
