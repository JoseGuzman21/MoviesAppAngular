import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  moviesSearched: any = [];
  movie: string;
  movieSearch = '';

  constructor(private ps: PeliculaService,
              private router: Router,
              private ar: ActivatedRoute) {
  this.ar.params.subscribe( params => {
    console.log('params: ', this.movieSearch);
    if (params.texto) {
      this.movie = params.texto;
      this.searchMovie(this.movie);
    }
  });
}

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  searchMovie(movie: string) {
    this.ps.searchMovie(movie).subscribe(data => {
      this.movieSearch = movie;
      this.moviesSearched = data;
    });
  }
}
