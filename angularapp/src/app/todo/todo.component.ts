import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoservice:TodoService) { }

  ngOnInit() {
  }
  createTodo(){
    let todo={
      id: new Date().getTime(),
      title:'Format the Data of FireBase'
    }
    this.todoservice.create(todo).subscribe((response)=>{
      console.log('todo create ',response);
      
    },
    (error=>{
      console.log(error);
      
    }))
  }

}
