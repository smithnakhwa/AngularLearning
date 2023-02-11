import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  peoples:any[]=[
    {
      'name': 'Jack',
      'country':'UK'
    },
    {
      'name': 'smith',
      'country':' USA'
    },
    {
      'name': 'Anup',
      'country':'HK'
    },
    {
      'name': 'Surya',
      'country':'USA'
    },
    
    
  
   ]
  constructor() { }

  ngOnInit() {
  }

}
