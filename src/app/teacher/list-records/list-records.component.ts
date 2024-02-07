import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditRecordComponent } from '../add-edit-record/add-edit-record.component';
import { RecordService } from '../../../Service/record.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrl: './list-records.component.css'
})
export class ListRecordsComponent implements OnInit {

  datasource: any = [];
  id:any;
  constructor(private _recordService: RecordService, private router: Router, private location: Location) { }
  ngOnInit(): void {
    this.getRecordList();
  }



  getRecordList() {
    this._recordService.getRecordList().subscribe({
      next: (res) => {
        this.datasource = res;

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openEditForm(data: any) {
    this.router.navigate([`edit/${data.id}`]);
  }

  deleteRecord(data: any) {
    let text = `Are you sure you want to clear the registry ${data.rollNumber}?`;
    if (confirm(text) == true) {
      this._recordService.deleteRecordById(data.id).subscribe({
        next: (res) => {
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}