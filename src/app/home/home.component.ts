import { Component, EventEmitter, Output } from '@angular/core';
import { LoggedService } from '../../Service/logged.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent {
  constructor(private _serv: LoggedService) {}

  login(){
    this._serv.setVariable(true);
  }
}
