import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor(
    private _stdService : StudentService,
    private _UuidService : UuidService,
  ) { }

  @ViewChild('stdForm') stdForm !: NgForm

  ngOnInit(): void {
  }

  onStdAdd(){
   if(this.stdForm.valid){
     let newStd = {...this.stdForm.value , stdId : this._UuidService.Uuid()}
     this.stdForm.reset()
     this._stdService.createStd(newStd)
   }
  }

}
