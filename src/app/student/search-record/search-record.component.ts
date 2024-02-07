import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecordService } from '../../../Service/record.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-record',
  templateUrl: './search-record.component.html',
  styleUrl: './search-record.component.css'
})
export class SearchRecordComponent {
  recordFrom: FormGroup;

  constructor(private _fb: FormBuilder, private _recordService: RecordService, private router: Router, private location: Location) {
    this.recordFrom = _fb.group({
      rollNumber: '',
      dateOfBirth: '',
    });
  }


  onFormSubmit() {
    if (this.recordFrom.valid) {
      this._recordService.getRecordByStudent(this.recordFrom.value.rollNumber, this.recordFrom.value.dateOfBirth).subscribe({
        next: (res: any) => {
          if (res.length > 0) {
            this.router.navigate([`view/${res[0].id}`]);
          } else {
            console.log('Not find')

          }
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }

  onClear() {
    this.recordFrom.reset();
  }
}
