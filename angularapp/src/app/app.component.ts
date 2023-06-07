/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable angular/log */
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { Stock } from './models/stock';
import { RapidapiService } from './rapidapi.service';
import { GiphyService } from './giphy.service';
import { PostmanService } from './postman.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  appchildExist:boolean=true;
  title = 'angularapp';
  hero:string="Smith";
  empCount;
  test='I am div with innerHTML';
  parentToChild :string="i am Coming From parent";
  childToParent:string;
  studobj;
  post=[{
    title:'Plam Tree',
    contect: 'I Love this tree'
  },
  {
    title:'Plam Tree',
    contect: 'I Love this tree'
  }
];



  data = {
    name:'Smith',
    dept:'ËXTC',   

  }
  // products=this.obj.products;
  imageUrl:'http://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  // constructor(private obj:MyServiceService,priva te demoservice:DemoserviceService){
    constructor(private finance:RapidapiService,private giphy:GiphyService,private postman:PostmanService,private modal:NgxSmartModalService,private translateService: TranslateService){
    this.getValueFromServer();
    // Set the default language
    this.translateService.addLangs(['en', 'es','pr']);
    if(localStorage.getItem('lang')){
      let ln=localStorage.getItem('lang');
      translateService.use(ln).subscribe(()=>{

      })
    }
    else{
      translateService.use('en').subscribe(()=>{

      })
    }
  
  }
  // keys=[];
  // values=[];
  pdata="red";
 ChangeFromParent(val){
  this.pdata=val;
 }
  news=[];
  quotes=[];
  gifs=[];

  result=[];
  searchName:string='';
  public stock:Stock;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });    this.postman.getData().subscribe(res=>{
     console.log('this is postman data',res);
     
    });

     this.stock=new Stock('Test stock company','TSC',85,90);

  //   this.demoservice.getUsers().subscribe(res=>{
  //     console.log('user api result',res);
  //     this.result=res;
  //     // const iterate=(obj)=>{
  //     //   Object.keys(obj).forEach(key=> {
  //     //     if(typeof obj[key]==='object' && obj[key] !==null)
  //     //     {
  //     //       iterate(obj[key]);
  //     //     }
  //     //     else{
  //     //       this.values.push(obj[key]);
  //     //       this.keys.push(key);

  //     //     }
  //     //   })
  //     // }
  //     // for (let index = 0; index <15; index++) {
  //     //   this.values=[];
  //     //   this.keys=[];
  //     //   iterate(res[index]);
  //     //   this.result[index]=this.values;
        
        
  //     // }
  //   },
  //   err=>{
  //     console.log(err);
      
  //   } )
    
  // }
  let pen='smith';
    let book='rohit';
    this.modal.setModalData(pen,'modalone');
    this.modal.setModalData(book,'modaltwo');
  this.finance.getFinance().subscribe(res=>{
    // this.news=res.news;
    // this.quotes=res.quotes;


    console.log(res);
    console.log(this.news);
    console.log(this.quotes);
    
    
    
  })
  }
  
  ename:string;
  sal:number;
  getValueFromServer(){
    this.empCount=100000;
  }
  currentTime(): any{
    let date=new Date();
    return date;

  }
  currentDate():any{
    let date1=new Date();
    return ' '+date1.getDay()+'/'+date1.getMonth()+'/'+date1.getFullYear();
  }
  onParent(val){
    this.childToParent=val;
  }
  onDestroy(){
    this.appchildExist=false;
  }

  objChildToParent(val:Employee){
    this.ename=val.name;
    this.sal=val.sal;
  
  }


}
