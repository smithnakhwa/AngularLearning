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
      this.states.length=0;
      this.states.unshift('Maharastra','Assam','Goa');
      
     }
     else if(val.target.value==this.country[1]){
      this.states.length=0;
      this.states.unshift('California','Alaska','Hawai');
     
     }
     else{
      this.states.length=0;
     }
     
  }

}
