import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title='';
  @Input() content='';
  @Output() fromChild : EventEmitter<string> = new EventEmitter<string>();
  
  result:any;
  lastName:string="Bhai";


  
  sendToParent(){
    this.fromChild.emit(this.lastName);
    
  }


  constructor() { }

  ngOnInit() {
  }

}
