import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../Model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movie$ !: Movie;
  movieId : any;

  constructor(private ms:MovieService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.movieId = data['id'];
      this.getData(this.movieId);
    })
  }

  getData(id:any){
    this.ms.getMovie(id).subscribe((data) => {this.movie$ = data});
  }
}
