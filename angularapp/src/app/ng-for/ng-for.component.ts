import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  title:string='Top 3 Bollywood movies';
  movies:Movie[]=[
    { title:'3 Idiots',director:'Rajkumar',cast:'Amir',releaseDate:'2009'},
    { title:'3 Idiots',director:'Rajkumar',cast:'Amir',releaseDate:'2009'},
    {title:'3 Idiots',director:'Rajkumar',cast:'Amir',releaseDate:'2009'}
   ];
   favSongs=['vedTuze','yad lagale','Duniya Banane wale','Radha hi bavari'];
   country=['India','USA'];
   states=[];
  //  'Maharastra','California'
  constructor() { }

  ngOnInit() {
  }
  onClick(val){
     if(val.target.value==this.country[0])
     {
      this.states.unshift('Maharastra');
      this.states.length=1;
     }
     else{
      this.states.unshift('California');
      this.states.length=1;
     }
     
  }

}
