import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ListRecordsComponent } from './teacher/list-records/list-records.component'

import { SearchRecordComponent } from './student/search-record/search-record.component'
import { ViewRecordComponent } from './student/view-record/view-record.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditRecordComponent } from './teacher/add-edit-record/add-edit-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {MatIconModule} from '@angular/material/icon';
import { EditRecordComponent } from './teacher/edit-record/edit-record.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddEditRecordComponent
  },{
    path: 'edit/:id',
    component: EditRecordComponent
  }, {
    path: 'list',
    component: ListRecordsComponent
  }, {
    path: 'search',
    component: SearchRecordComponent
  }, {
    path: 'view/:id',
    component: ViewRecordComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListRecordsComponent, 
    SearchRecordComponent,
    ViewRecordComponent,
    HomeComponent,
    AddEditRecordComponent,
    EditRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop'),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
