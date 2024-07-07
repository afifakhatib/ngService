import { Injectable, OnInit } from '@angular/core';
import { Istds } from '../component/std-task/model/std.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit{

  stdData : Array<Istds> = [
    {
      fname : 'jhon',
      lname : 'doe',
      email : 'jd12@gmail.com',
      contact : 8669569705,
      stdId : '1111'
    },
    {
      fname : 'jolie',
      lname : 'doe',
      email : 'jd12@gmail.com',
      contact : 8669569705,
      stdId : '2222'
    },
    {
      fname : 'james',
      lname : 'doe',
      email : 'jd12@gmail.com',
      contact : 8669569705,
      stdId : '3333'
    },
    {
      fname : 'may',
      lname : 'doe',
      email : 'jd12@gmail.com',
      contact : 8669569705,
      stdId : '4444'
    },
    {
      fname : 'tony',
      lname : 'doe',
      email : 'jd12@gmail.com',
      contact : 8669569705,
      stdId : '5555'
    }
  ]

  constructor(
    private _snackBar : SnackbarService,
  ) { }
  
  ngOnInit(): void {
  
  }

 fetchStdInfo(){
  // api call
  return this.stdData
 } 

 createStd(newStd : Istds){
  // api call
      this.stdData.push(newStd)
      this._snackBar.openSnackBar(`New Student ${newStd.fname} ${newStd.lname} is addedd successfully!!`)
    }

    removeStd(removeStd : Istds){
      // api call
      let confirmtion = confirm(`Are you sure ? Do you want to remove student ${removeStd.fname} ${removeStd.lname} ?`)
      let getIndex = this.stdData.findIndex(data => data.stdId === removeStd.stdId)
      this.stdData.splice(getIndex , 1)
      this._snackBar.openSnackBar(` ${removeStd.fname} ${removeStd.lname} removed successfully!!!`)
    }
}
