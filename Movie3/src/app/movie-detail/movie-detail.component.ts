import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Model/movie';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  movies !: Movie; // Use this variable for storing output of getMovieById without arrays.

  //movieArray$ : Observable<Movie[]> = of([]); //Use this variable for storing output of getMovieById with arrays.
  

  constructor(private route: ActivatedRoute, private ms: MovieService) {}

  ngOnInit(): void {
    this.route.params.subscribe((data)=>
    {
      const a = data['id'];
      this.getData(a);
    })
    
  }

//Use below method if using service getMovieById without array output
  getData(id:any)
  {
    this.ms.getMovie(id).subscribe((data)=>
    {
      this.movies = data;
    })
  }

//Use below method if using service getMovieById with array output
  // getData(id:any)
  // {
  //   this.movieArray$= this.ms.getMovie(id);
  // }
  
}
