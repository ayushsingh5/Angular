import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../Model/movie';
import { MovieService } from '../Service/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.scss']
})
export class ViewByIdComponent implements OnInit {
  data$: Observable<Movie[]> = of([]);
  d$: Observable<Movie[]> = of([]);
  movieId !: number;

  constructor(private ms: MovieService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      const id = param['id'];
      this.getData(id);
    });
  }

  getData(id: number): void {
    this.data$ = this.ms.getMovieById(id);
    this.d$ = this.data$;
  }

  viewMovie(): void {
    if (this.movieId) {
      this.getData(this.movieId);
    }
  }

  getMovieInfo(){
    this.data$ = this.ms.getAllMovies();
    console.log(this.data$);
  }

  deleteData(id : number) {
    alert("deleted");
    this.ms.deleteById(id).subscribe(() => this.getMovieInfo());
  }
}