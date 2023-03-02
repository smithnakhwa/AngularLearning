import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import { Employee } from './models/employee';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewChecked,AfterViewInit,AfterContentChecked,AfterContentInit{
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
]

  data = {
    name:'Smith',
    dept:'ËXTC',

  }
  products=this.obj.products;
  imageUrl:'http://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  constructor(private obj:MyServiceService,private demoservice:DemoserviceService){
    this.getValueFromServer();
  }
  keys=[];
  values=[];
  result=[];

  ngOnInit(): void {
    this.demoservice.getUsers().subscribe(res=>{
      console.log('user api result',res);
      const iterate=(obj)=>{
        Object.keys(obj).forEach(key=> {
          if(typeof obj[key]==='object' && obj[key] !==null)
          {
            iterate(obj[key]);
          }
          else{
            this.values.push(obj[key]);
            this.keys.push(key);

          }
        })
      }
      for (let index = 0; index < res.length; index++) {
        this.values=[];
        this.keys=[];
        iterate(res[index]);
        // this.result.push([this.keys]);
        this.result[index]=this.values;
        
        
      }
      console.log(this.result);
      
   
      console.log(this.values);
      console.log(this.keys);
      
      console.log(res);


      

      
    },
    err=>{
      console.log(err);
      
    } )
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component- OnChanges',changes)
  }
  ngOnDestroy(): void {
    console.log(`App Component- OnDestroy`);
  }
  ngDoCheck(): void {
    console.log(`App Component- DoCheck`);
  }
  ngAfterViewChecked(): void {
    console.log(`App Component- AfterViewChecked`);
  }
  ngAfterViewInit(): void {
    console.log(`App Component- AfterViewInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`App Component- AfterContentChecked`);
  }
  ngAfterContentInit(): void {
    console.log(`App Component- AfterContentInit`);
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

  objChildToParent(val:Employee){
    this.ename=val.name;
    this.sal=val.sal;
  
  }
}
