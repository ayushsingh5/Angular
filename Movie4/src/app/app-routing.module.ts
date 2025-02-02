import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:"full"},
  {path:'movielist', component:MovieListComponent},
  {path:'movieform', component:MovieFormComponent},
  {path:'movieupdate/:id', component:MovieUpdateComponent},
  {path:'moviedetails/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
