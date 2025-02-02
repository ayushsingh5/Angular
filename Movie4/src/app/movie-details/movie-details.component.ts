import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Service/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movie !: any;

  constructor(private ms:MovieService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const id = data['id'];
      this.getData(id);
    })
  }

  getData(id:any){
    this.ms.getMovie(id).subscribe((data) => {this.movie = data});
  }
}
