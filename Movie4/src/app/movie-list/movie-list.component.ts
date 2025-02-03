import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Service/movie.service';
import { map, Observable, of } from 'rxjs';
import { Movie } from '../Model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{

  movies$:Observable<any>=of([]);
  filteredMovies$:Observable<any>=of([]);

  filtertext!:'';

  constructor(private ms:MovieService, private routeer:Router){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.movies$ = this.ms.getMovies();
    this.filteredMovies$ = this.movies$;
  }

  // Default Sorting
  // getData(){
  //   this.movies$ = this.ms.getMovies();
  //   this.filteredMovies$ = this.movies$.pipe(map((d) => {
  //     d.sort((a:Movie, b:Movie) => a.movieName.localeCompare(b.movieName))
  //   }))
  // }

  deleteMovie(id:any){
    this.ms.deleteMovie(id).subscribe(() => { 
      alert("Deletion Successfull");
      this.routeer.navigateByUrl('movielist'); })
  }

  searchMovie(filterText:any){
    const a = filterText.target.value;
    this.filtertext = a;
  }

  ascending(){
    this.filteredMovies$ = this.movies$.pipe(map((movie) => movie.sort((a:Movie, b:Movie) => a.movieName.localeCompare(b.movieName))))
    this.movies$=this.filteredMovies$;
  }

  descending(){
    this.filteredMovies$ = this.movies$.pipe(map((movie) => movie.sort((a:Movie, b:Movie) => b.movieName.localeCompare(a.movieName))))
    this.movies$=this.filteredMovies$;
  }
}
