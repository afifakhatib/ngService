import { Injectable, OnInit } from '@angular/core';
import { Itodo } from '../component/TodoTask/models/todo.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit{

  todoData : Array<Itodo> = [
    {
      todoitem: 'Angular',
      todoId: '1111'
    },
    {
      todoitem: 'JavaScript',
      todoId: '2222'
    },
    {
      todoitem: 'Rxjs',
      todoId: '3333'
    },
    {
      todoitem: 'Mongo DB',
      todoId: '4444'
    },
    {
      todoitem: 'Node js',
      todoId: '5555'
    }
  ]

  constructor(
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
  
  }

  fetchAllTodo() : Itodo[] {
    // api call from db
    return this.todoData
  }

  oncreateTodo(newTodoObj : Itodo){
     this.todoData.push(newTodoObj)
     this._snackBar.openSnackBar(`New TodoItem ${newTodoObj.todoitem} is addedd successfully!!`)
  }

  removeTodo(removeTodo : Itodo){
    let getRemoveIndex = this.todoData.findIndex(todo => todo.todoId === removeTodo.todoId)
    this.todoData.splice(getRemoveIndex , 1)
  }
}
