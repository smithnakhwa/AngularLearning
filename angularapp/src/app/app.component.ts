import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
  constructor(private obj:MyServiceService){
    this.getValueFromServer();
  }
  ngOnInit(): void {
    this.empCount=100;
    console.log(`App Component- OnInit`);
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
