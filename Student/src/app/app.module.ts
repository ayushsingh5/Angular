import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    StudentDetailsComponent,
    StudentUpdateComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
