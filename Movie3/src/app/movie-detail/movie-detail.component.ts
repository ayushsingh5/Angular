import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private ms: MovieService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ms.getMovie('id').subscribe((movie) => {
      this.movie = movie;
    });
  }
}
