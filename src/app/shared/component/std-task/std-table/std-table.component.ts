import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Istds } from '../model/std.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdArr  !: Array<Istds> 

  stdCloumnsToDisplay  = ['srNo' , 'fname', 'lname' , 'email' , 'contact' , 'Edit' , 'Remove'];

  constructor(
    private _stdService : StudentService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
      this.stdArr = this._stdService.fetchStdInfo()
      this._snackBar.openSnackBar(`fetched student information successfully !!`)
  }

  onRemoveStd(std : Istds){
     this._stdService.removeStd(std)
  }
}
