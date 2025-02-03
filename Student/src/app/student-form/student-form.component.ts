import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { StudentService } from '../Service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{

  fg!: FormGroup;

  successMsg : boolean = false;

  constructor(private ss:StudentService, private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.fg = this.fb.group({
      name:["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      dateOfBirth:["",[Validators.required, this.dateValidator]],
      percentage:["", [Validators.required, Validators.pattern(/^\d+\.\d{1,2}$/)]],
      weight:[0, [Validators.required]]
    })
  }

  dateValidator(cont:AbstractControl):ValidationErrors | null {
    const dp = /^\d{4}-\d{2}-\d{2}$/;

    if(!dp.test(cont.value)){
      return {inval:true};
    }
    return null;
  }

  onSubmit(){
    if(this.fg.valid){
      this.ss.addStudent(this.fg.value).subscribe(() => {this.router.navigateByUrl('list')})
      this.successMsg = true;
      this.fg.reset;
    }
  }
}
