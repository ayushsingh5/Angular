import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../Model/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl:string = "https://super-trout-rx4pxpj45w93vv6-3000.app.github.dev/movies";

  constructor(private http:HttpClient) { }

  addMovie(mov:Movie):Observable<any>{
    return this.http.post(this.apiUrl, mov);
  }

  getMovie(id:any):Observable<any>{
    return this.http.get(this.apiUrl+"/"+id);
  }

  getMovies():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  updateMovie(id:any, mov:Movie):Observable<any>{
    return this.http.put(this.apiUrl+"/"+id, mov);
  }

  deleteMovie(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+"/"+id);
  }
}
