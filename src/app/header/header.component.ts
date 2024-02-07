import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../../Service/logged.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router, private location:Location,  private  _serv: LoggedService) {}


  logOut(){
    this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    this.router.navigate(['']);
    this._serv.setVariable(false);

  }

  public get variable() {
    return this._serv.getVariable();
  }
}
