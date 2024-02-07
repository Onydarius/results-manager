import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecordService } from '../../../Service/record.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.css'
})
export class EditRecordComponent implements OnInit {

  editForm: FormGroup;
  paths: any;
  id: any;

  constructor(private _fb: FormBuilder, private _recordService: RecordService, private router: Router, private location: Location) {
    this.editForm = _fb.group({
      rollNumber: '',
      name: '',
      dateOfBirth: '',
      score: ''
    });
  }

  ngOnInit(): void {
    this.paths = this.location.path().split('/');
    this.id = this.paths[this.paths.length - 1]

    this._recordService.getRecordById(this.id).subscribe({
      next: (res: any) => {

        this.editForm = this._fb.group({
          rollNumber: res.rollNumber,
          name: res.name,
          dateOfBirth: res.dateOfBirth,
          score: res.score
        });
      },
      error: (err: any) => {
        console.error(err)
      }
    })


  }

  onFormSubmit() {
    if (this.editForm.valid) {
      this._recordService.updateRecord(this.id, this.editForm.value).subscribe({
        next: (val: any) => {
          alert('Record updated successffully');
          this.location.replaceState('/'); // clears browser history so they can't navigate with back button
          this.router.navigate(['list']);
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }

}
