import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MovieService } from '../Service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit{

  fgu!:FormGroup;
  
  successMsg : boolean = false;

  movieId : any;

    constructor(private fb:FormBuilder, private ms:MovieService, private router:Router, private route:ActivatedRoute){}
  
    ngOnInit(): void {

      this.movieId = this.route.snapshot.params['id'];

      this.fgu = this.fb.group({
        movieName:["",[Validators.required, Validators.min(1)]],
        dateOfRelease:["",[Validators.required, this.dateValidator]],
        mobNo:["",[Validators.required, Validators.pattern(/^\d{9}$/)]],
        email:["",[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]]
      })

      this.loadMovieData();
    }
  
    dateValidator(con:AbstractControl) : ValidationErrors | null{
      const dp = /^\d{4}-\d{2}-\d{2}$/
      if(!dp.test(con.value)){
        return {inval:true};
      }
      return null;
    }

    loadMovieData(){
      this.ms.getMovie(this.movieId).subscribe((data) => {
        if(data){
          this.fgu.patchValue(data);
        }
      })
    }

    onSubmit(){
      if(this.fgu.valid){
        this.ms.updateMovie(this.movieId, this.fgu.value).subscribe((data) => {
          alert("Update done successfully");
          this.router.navigate(['/movielist'])
        })
        this.successMsg = true;
      }
    }
}
