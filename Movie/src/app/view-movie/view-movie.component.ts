import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../Model/movie';
import { MovieService } from '../Service/movie.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit{
  data$ : Observable<Movie[]> = of([]);

  constructor(private ms:MovieService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.data$ = this.ms.getAllMovies();
    console.log(this.data$);
  }
}
