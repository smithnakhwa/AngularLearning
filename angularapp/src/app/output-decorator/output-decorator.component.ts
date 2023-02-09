import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
 @Output() objFromChild:  EventEmitter<Employee>=new EventEmitter<Employee>();

 employee:Employee;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
  
    this.employee=new Employee();
    this.employee.name="SMith";
    this.employee.sal=37857385;
    this.objFromChild.emit(this.employee);
  }
  
}
