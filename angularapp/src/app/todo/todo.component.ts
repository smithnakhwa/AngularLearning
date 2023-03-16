import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos;
  constructor(private todoservice:TodoService) { }
value;
  ngOnInit() {
    this.getTodoList();
  }
  createTodo(){
    let todo={
      id: new Date().getTime(),
      title:'Format the Data of FireBase'
    }
    this.todoservice.create(todo).subscribe((response)=>{
      this.getTodoList();
      console.log('todo create ',response);
      
    },
    (error=>{
      console.log(error);
      
    }));
  
  }
  getTodoList(){
    this.todoservice.fetch().subscribe(res=>
      {
        this.todos=res;
      })
  }
  edit(id,data){
    if(this.value==null || this.value==''){
      data={
        id:new Date().getTime(),
        title:'This is default'
      }
    }
    else{
      data={
        id:new Date().getTime(),
        title:this.value
    }
  }
  
    this.todoservice.update(id,data).subscribe(res=>{
      this.getTodoList();
      console.log(res);
      
    })
  }
  delete(id){
    this.todoservice.delete(id).subscribe(res=>{
      this.getTodoList();
      console.log(res);
      
    })
  }

}
