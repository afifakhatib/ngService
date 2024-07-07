import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { TodoFormComponent } from './todo-form/todo-form.component';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
  ]
})
export class TodoModule { }
