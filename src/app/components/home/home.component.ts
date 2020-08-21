import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesTheatres: any[] = [];
  moviesMostPopulars: any[] = [];
  moviesMostPopularsKids: any[] = [];

  constructor(private ps: PeliculaService) { }

  ngOnInit(): void {
    this.getAllMoviesTheatres();
    this.getAllPopularsMovies();
    this.getAllPopularsKidsMovies();
  }

  // tslint:disable-next-line: typedef
  getAllMoviesTheatres() {
    this.ps.getAllMoviesTheatres()
      .subscribe((data: any[]) => {
        console.log('data of getAllMoviesTheatres', data);
        this.moviesTheatres = data;
      });
  }

  // tslint:disable-next-line: typedef
  getAllPopularsMovies() {
    this.ps.getAllPopularsMovies()
      .subscribe((data: any[]) => {
        /* console.log('data of getAllPopularsMovies', data); */
        this.moviesMostPopulars = data;
      });
  }

  // tslint:disable-next-line: typedef
  getAllPopularsKidsMovies() {
    this.ps.getAllPopularsKidsMovies()
      .subscribe((data: any[]) => {
        /* console.log('data of getAllPopularsKidsMovies', data); */
        this.moviesMostPopularsKids = data;
      });
  }
}
