import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../../Service/record.service';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrl: './view-record.component.css'
})
export class ViewRecordComponent implements OnInit {

  paths: any;
  id: any;
  data: any;

  constructor(private _recordService: RecordService , private location: Location) { }

  ngOnInit(): void {
    this.paths = this.location.path().split('/');
    this.id = this.paths[this.paths.length - 1];


    this._recordService.getRecordById(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.data = res;
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
}
