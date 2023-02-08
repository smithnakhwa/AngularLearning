import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
 @Output() fromChildToParent: EventEmitter<Object>=new EventEmitter<Object>();
 student={
  name:'smith',
  roll_no:22,
  std:'16'

 }
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.fromChildToParent.emit(this.student);
  }
}
