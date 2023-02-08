import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  name="Smith";
  empCount;
  test='I am div with innerHTML';
  parentToChild :string="i am Coming From parent";
  childToParent:string;
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
  imageUrl:'http://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  constructor(){
    this.getValueFromServer();
  }
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
}