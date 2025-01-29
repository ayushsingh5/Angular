import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { ViewByIdComponent } from './view-by-id/view-by-id.component';


const routes: Routes = [
  {path:'addMovie', component:AddMovieComponent},
  {path:'viewMovie', component:ViewMovieComponent},
  {path:'viewMovieById/:id', component:ViewByIdComponent},
  {path:'viewById', component:ViewByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
