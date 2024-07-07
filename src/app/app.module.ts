import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { TodoModule } from './shared/component/TodoTask/todo/todo.module';
import { TodoComponent } from './shared/component/TodoTask/todo/todo.component';
import { TodoFormComponent } from './shared/component/TodoTask/todo/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/TodoTask/todo/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { CreditCardComponent } from './shared/component/credit-card/credit-card.component';
import { CreditCardDirective } from './shared/directive/credit-card.directive';
import { TodoTaskComponent } from './shared/component/todo-task/todo-task.component';
import { StdTaskComponent } from './shared/component/std-task/std-task.component';
import { StdFormComponent } from './shared/component/std-task/std-form/std-form.component';
import { StdTableComponent } from './shared/component/std-task/std-table/std-table.component';
import { StdModule } from './shared/component/std-task/std/std.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    CreditCardComponent,
    CreditCardDirective,
    TodoTaskComponent,
    StdTaskComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodoModule,
    MaterialModule,
    FormsModule,
    StdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
