import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo.interface';
import { TodoService } from 'src/app/shared/services/todo.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos !: Array<Itodo>

  constructor(
    private _todoService : TodoService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.todos = this._todoService.fetchAllTodo()
    this._snackBar.openSnackBar(`Fetched todo data successfully!!`)
  }

  onRemoveTodo(removeTodoObj : Itodo){
    let alertConfirm = confirm(`Are you sure ? You want to remove TodoItem named ${removeTodoObj.todoitem} ?`)
    if(alertConfirm === true){
      this._todoService.removeTodo(removeTodoObj)
      this._snackBar.openSnackBar(`TodoItem Named ${removeTodoObj.todoitem} is removed successfully!!!`)
    }
  }


}
