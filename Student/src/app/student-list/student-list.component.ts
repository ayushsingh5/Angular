import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { StudentService } from '../Service/student.service';
import { Router } from '@angular/router';
import { Student } from '../Model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  students$ : Observable<any> = of([]);
  filteredStudents$ : Observable<any> = of([]);

  filtertext!:'';

  constructor(private ss:StudentService, private router:Router){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.students$ = this.ss.getStudents();
     this.filteredStudents$ = this.students$.pipe(map((data)=>
    data.sort((a:Student, b:Student) => a.name.localeCompare(b.name))))
     //this.students$=this.filteredStudents$;
  }

  // searchStudent(event:any){
  //   const st = event.target.value.trim().toLowerCase();

  //   if(!st){
  //     this.filteredStudents$ = this.students$;
  //   }
  //   this.filteredStudents$ = this.students$.pipe(map((students) => {
  //     return students.filter((student:Student) => {
  //       student.id.toString().includes(st) || student.name.toLowerCase().includes(st);
  //     })
  //   }))
  // }

  deleteStudent(id:any){
    this.ss.deleteStudent(id).subscribe(() => 
      {
      alert("Deleted");
      this.router.navigateByUrl('list');
    }
  )
  }

}
