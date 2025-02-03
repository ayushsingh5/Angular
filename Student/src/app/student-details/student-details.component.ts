import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{

  stud !: any;
  sId !: any;

  constructor(private ss:StudentService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.sId = this.route.snapshot.params['id'];

    this.getData(this.sId);
  }

  getData(id:any){
    this.stud = this.ss.getStudent(id).subscribe((data) => {this.stud = data})
  }
}
