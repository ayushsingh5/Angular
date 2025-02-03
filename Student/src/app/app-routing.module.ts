import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

const routes: Routes = [
  {path:"", redirectTo:"", pathMatch:"full"},
  {path:"list", component:StudentListComponent},
  {path:"form", component:StudentFormComponent},
  {path:"details/:id", component:StudentDetailsComponent},
  {path:"update/:id", component:StudentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
