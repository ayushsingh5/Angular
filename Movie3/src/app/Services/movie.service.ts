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

  deleteMovie(id:string) : Observable<any> {
    return this.http.delete(this.apiUrl+"/"+id);
  }

  updateEvent(id: any, movie: Movie): Observable<any> {
    return this.http.put(this.apiUrl+"/"+id, movie);     
  }

  // Use this method in service if in problem statement 
  // it is not given that the output of the getById method should be in array
  //also according to this their will be some peronalised changes in movie-detail CHECK
  getMovie(id:string): Observable<any> {
    return this.http.get(this.apiUrl+"/"+id);  // return this.http.get(this.apiUrl+"/movies/"+id); in case of environment in case of urlEndpoint.
  }


  // Use this method in service if in problem statement 
  // it is given that the output of the getById method should be in array
  //also according to this their will be some peronalised changes in movie-detail CHECK

  // getMovie(id:string): Observable<any> {
  //   return this.http.get(this.apiUrl+"/"+id)
  //    .pipe(
  //      map((data) => {
  //        if(Array.isArray(data)){
  //          return data;
  //        }
  //        else {
  //          return [data];
  //        }
  //      })
  //     );
  // }

}
