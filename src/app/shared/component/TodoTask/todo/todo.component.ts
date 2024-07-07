import { Component, OnInit } from '@angular/core';
import { Itodo } from '../models/todo.interface';
import { TodoService } from 'src/app/shared/services/todo.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoArr !: Array<Itodo>

  constructor(
    // private _todoService : TodoService,
    // private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
    // this.todoArr = this._todoService.fetchAllTodo()
    // this._snackBar.openSnackBar(`Fetched todo data successfully!!`)
  }

}
