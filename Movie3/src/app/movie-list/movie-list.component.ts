import { Component } from '@angular/core';
import { Movie } from '../Model/movie';
import { map, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  filteredMovies$: Observable<Movie[]> = of([]);
  movies$ : Observable<Movie[]> = of([]);

  //addNewMovie: boolean = false;
  //text: any;

  constructor(private ms: MovieService, private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovies();
  }

  addMovie(movie : Movie){
    this.ms.addMovie(movie).subscribe((res)=> {this.getMovies()});
  }

  searchMovies(event:any){
    const searchTerm = event.target.value.trim().toLowerCase();
    if(!searchTerm)
      {
      this.filteredMovies$ = this.movies$;
    }
    else
    {
    this.filteredMovies$ = this.movies$.pipe(
      map((movies) => 
           movies.filter(
          (movie) => movie.id.toString().includes(searchTerm) || movie.movieName.includes(searchTerm) )))
  }
  }
  
  deleteMovie(id:any)
  {
    this.ms.deleteMovie(id).subscribe(()=>this.getMovies());
  }

  getMovies()
  {
    this.movies$ = this.ms.getAllMovies();
    this.filteredMovies$ = this.movies$;
  }

  ascending()
  {
    this.filteredMovies$ = this.movies$.pipe(map((movie) => 
      movie.sort((a:Movie,b:Movie) => 
        a.movieName.toLowerCase().localeCompare(b.movieName.toLowerCase()))));
  }

  descending()
  {
    this.filteredMovies$ = this.movies$.pipe(map((movie) => 
      movie.sort((a:Movie,b:Movie) => 
        b.movieName.toLowerCase().localeCompare(a.movieName.toLowerCase()))))
    //this.movies$ = this.filteredMovies$;
  }


}

