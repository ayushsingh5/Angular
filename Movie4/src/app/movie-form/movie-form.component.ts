import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MovieService } from '../Service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit{

  fg!:FormGroup;

  successMsg : boolean = false;

  constructor(private fb:FormBuilder, private ms:MovieService, private router:Router){}

  ngOnInit(): void {
    this.fg = this.fb.group({
      movieName:["",[Validators.required, Validators.min(1)]],
      dateOfRelease:["",[Validators.required, this.dateValidator]],
      mobNo:["",[Validators.required, Validators.pattern(/^\d{9}$/)]],
      email:["",[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]]
    })
  }

  dateValidator(con:AbstractControl) : ValidationErrors | null{
    const dp = /^\d{4}-\d{2}-\d{2}$/
    if(!dp.test(con.value)){
      return {inval:true};
    }
    return null;
  }

  onSubmit(){
    if(this.fg.valid){
      this.ms.addMovie(this.fg.value).subscribe(() => this.router.navigateByUrl('movielist'))
      this.successMsg = true;
    }
  }
}
