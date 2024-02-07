import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RecordService{

  api = 'http://localhost:3000/records/';
  constructor(private _http: HttpClient) { }

  addRecord(data: any): Observable<any>{
    return this._http.post(this.api, data);
  }

  getRecordList(): Observable<any>{
    return this._http.get(this.api);
  }

  getRecordById(id:number):Observable<any>{
    return this._http.get(this.api+`${id}`)
  }

  deleteRecordById(id:number):Observable<any>{
    return this._http.delete(this.api+`${id}`)
  }

  updateRecord(id:any, data: any): Observable<any>{
    return this._http.put(this.api+`${id}`, data);
  }

  getRecordByStudent(rollNumber:number, dateOfBirth:any):Observable<any>{
    return this._http.get(this.api+`?rollNumber=${rollNumber}&dateOfBirth=${dateOfBirth}`)
  }
}
