import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit{

  fgu!:FormGroup;

  successMsg:boolean=false;

  studId!:any;

  constructor(private ss:StudentService, private router:Router, private fb:FormBuilder, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.studId = this.route.snapshot.params['id'];

    this.fgu = this.fb.group({
      name:["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      dateOfBirth:["",[Validators.required, this.dateValidator]],
      percentage:["", [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      weight:[0, [Validators.required]]
    })

    this.loadStudentData();
  }

  dateValidator(cont:AbstractControl):ValidationErrors | null {
    const dp = /^\d{4}-\d{2}-\d{2}$/;

    if(!dp.test(cont.value)){
      return {inval:true};
    }
    return null;
  }

  loadStudentData(){
    this.ss.getStudent(this.studId).subscribe((data) => {
      this.fgu.patchValue(data);
    })
  }

  onSubmit(){
    if(this.fgu.valid){
      this.ss.updateStudent(this.studId, this.fgu.value).subscribe(() => {this.router.navigateByUrl('list')})
      this.successMsg = true;
      this.fgu.reset;
    }
  }
}
