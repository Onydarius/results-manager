import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecordService } from '../../../Service/record.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-edit-record',
  templateUrl: './add-edit-record.component.html',
  styleUrl: './add-edit-record.component.css'
})
export class AddEditRecordComponent{

  recordFrom: FormGroup;

  constructor(private _fb: FormBuilder, private _recordService: RecordService, private router:Router, private location:Location) {
    this.recordFrom = _fb.group({
      rollNumber: '',
      name: '',
      dateOfBirth: '',
      score: ''
    });
  }


  onFormSubmit() {
    if (this.recordFrom.valid) {
      this._recordService.addRecord(this.recordFrom.value).subscribe({
        next: (val: any) => {
          alert('Record added successffully'); 
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
