import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import { Employee } from './models/employee';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
      for (let index = 0; index <15; index++) {
        this.values=[];
        this.keys=[];
        iterate(res[index]);
        this.result[index]=this.values;
        
        
      }    
    },
    err=>{
      console.log(err);
      
    } )
    
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
