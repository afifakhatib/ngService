import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  // @ViewChild('todoForm') todoForm !: NgForm ;

  @ViewChild('todoForm') todoForm !: NgForm;

  constructor(
    private _todoService : TodoService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    if(this.todoForm.valid){
        // here we get new obj
        let newTodo = {...this.todoForm.value , todoId : this._uuidService.Uuid()}
        this.todoForm.reset()
        // API call service 
        this._todoService.oncreateTodo(newTodo)
    }
   }


}
