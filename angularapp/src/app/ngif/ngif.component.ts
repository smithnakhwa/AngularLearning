import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  posts=[

    {
      title: 'Neat Tree',
      imageUrl:'',
      content:'I saw This tree'
    },
    {
      title: 'Neat Tree',
      imageUrl:'',
      content:'I saw This tree'
    },
    {
      title: 'Neat Tree',
      imageUrl:'',
      content:'I saw This tree'
    }
    
  ]

  showme:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
