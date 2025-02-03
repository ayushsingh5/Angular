import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl:string = "https://super-trout-rx4pxpj45w93vv6-3000.app.github.dev/student";

  constructor(private http:HttpClient) { }

  addStudent(stud:Student): Observable<any>{
    return this.http.post(this.apiUrl, stud);
  }

  getStudents(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getStudent(id:any): Observable<any>{
    return this.http.get(this.apiUrl+"/"+id);
  }

  deleteStudent(id:any): Observable<any>{
    return this.http.delete(this.apiUrl+"/"+id);
  }

  updateStudent(id:any, stud:Student): Observable<any>{
    return this.http.put(this.apiUrl+"/"+id, stud);
  }
}
