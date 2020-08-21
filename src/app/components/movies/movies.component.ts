import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieSeached: any[] = [];

  constructor(private ps: PeliculaService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovieById();
  }

  // tslint:disable-next-line: typedef
  getMovieById() {
    this.activateRoute.params.subscribe((params) => {
      this.ps.getMovieById(params.id)
        .subscribe((data: any[]) => {
          this.movieSeached = data;
          console.log('data', this.movieSeached);
          // console.log('data of getMovieById', this.movieSeached[0]['original_title']);
        });
      });
    }
}
