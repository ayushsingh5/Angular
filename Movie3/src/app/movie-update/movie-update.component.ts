import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MovieService } from '../Services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  fgu !: FormGroup;
  
  movieId: any;

  successMsg : boolean = false;

  constructor(
    private fb: FormBuilder,
    private ms: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];

    this.fgu = this.fb.group({
      movieName: ["",[Validators.required]],
      dateOfRelease: ["",[Validators.required, this.dateValidator]],
    });

    this.loadMovieData();
  }

  loadMovieData(): void {
    this.ms.getMovie(this.movieId).subscribe(movie => {
      if (movie) {
        this.fgu.patchValue({
          movieName: movie.movieName,
          dateOfRelease: movie.dateOfRelease
        });
      }
    });
  }

    dateValidator(cont:AbstractControl): ValidationErrors | null {
      const dp = /^\d{4}-\d{2}-\d{2}$/;
      if(!dp.test(cont.value)){
        return {inval:true};
      }
      return null;
    }

  onSubmit() {
    if (this.fgu.valid) {
      this.ms.updateEvent(this.movieId, this.fgu.value).subscribe(() =>{
        this.router.navigateByUrl('movies');
        this.successMsg = true;
      })
    }
  }
}
