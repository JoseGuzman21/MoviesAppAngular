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
  regresar = '';
  busqueda: '';

  constructor(private ps: PeliculaService,
              private activateRoute: ActivatedRoute) {
                this.getMovieById();
              }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  getMovieById() {
    // tslint:disable-next-line: deprecation
    this.activateRoute.params.subscribe((params) => {
      this.regresar = params['pag'];
      if (params.busqueda) {
        this.busqueda = params['busqueda']
        console.log('busuqueda: ', this.busqueda);
      }
      this.ps.getMovieById(params.id)
        .subscribe((data: any[]) => {
          this.movieSeached = data;
          console.log('data', this.movieSeached);
        });
      });
    }
}
