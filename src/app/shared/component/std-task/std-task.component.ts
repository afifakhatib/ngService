import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-std-task',
  templateUrl: './std-task.component.html',
  styleUrls: ['./std-task.component.scss']
})
export class StdTaskComponent implements OnInit {

  constructor(
    private _stdService : StudentService,
    private _uuid : UuidService, 
  ) { }

  ngOnInit(): void {
  }

}
