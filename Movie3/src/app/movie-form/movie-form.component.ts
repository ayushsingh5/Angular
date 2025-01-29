import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MovieService } from '../Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})

export class MovieFormComponent implements OnInit{
  fg !: FormGroup;

  text : any;

  successMsg : boolean = false;

  constructor(private fb:FormBuilder, private ms:MovieService, private router:Router){}

  ngOnInit(): void {
    this.fg = this.fb.group({
      movieName:["",[Validators.required]],
      dateOfRelease:["",[Validators.required,this.dateValidator]],
    });
  }

  dateValidator(cont:AbstractControl): ValidationErrors | null {
    const dp = /^\d{4}-\d{2}-\d{2}$/;
    if(!dp.test(cont.value)){
      return {inval:true};
    }
    return null;
  }

  insertData(){
    if(this.fg.valid){
      this.ms.addMovie(this.fg.value).subscribe(() => {this.router.navigate(['/viewMovie'])
      });
      this.fg.markAllAsTouched();
      this.successMsg = true;
    }
  }

  reset()
  {
    this.text ="";
    this.ms.getAllMovies();
  }
}
