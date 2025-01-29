import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../Model/movie';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = "https://super-trout-rx4pxpj45w93vv6-3000.app.github.dev/movies";

  constructor(private http:HttpClient) { }

  addMovie(mov : Movie): Observable<any>{
    return this.http.post(this.apiUrl,mov);
  }

  getAllMovies(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getMovie(id:string): Observable<any> {
    return this.http.get(this.apiUrl+"/"+id).pipe(
      map((data) => {
        if(Array.isArray(data)){
          return data;
        }
        else {
          return [data];
        }
      })
     );
  }

  deleteById(id:string) : Observable<any> {
    return this.http.delete(this.apiUrl+"/"+id);
  }
}
