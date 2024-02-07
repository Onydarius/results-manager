import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  public isLogged;

  setVariable(set){
    localStorage.setItem("isLogged", set);
    this.isLogged = set;
  }

  getVariable(){
    return localStorage.getItem("isLogged");
  }

  constructor() { }
}
