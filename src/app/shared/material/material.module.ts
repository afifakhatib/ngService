import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

 const MatModuleArr = [
      MatCardModule,
      MatSnackBarModule,
      MatInputModule,
      MatButtonModule,
      MatListModule,
      MatDividerModule,
      MatIconModule,
      MatTableModule
 ]
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MatModuleArr
  ],
  exports : [
    MatCardModule,
    ...MatModuleArr
  ]
})
export class MaterialModule { }
