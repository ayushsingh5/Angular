import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' }, // Default route
  { path: 'movies', component: MovieListComponent }, // List of shipments
   { path: 'movies/new', component: MovieFormComponent }, // Form to add a new shipment
   { path: 'movies/:id', component: MovieDetailComponent },
  {path:'movie-list',component:MovieListComponent},
   {path:'movie-form',component:MovieFormComponent}, 
   {path:'movie-details/:id',component:MovieDetailComponent}, 
   {path:'movie-details',component:MovieDetailComponent},
   {path:'',redirectTo:'/movie-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
