import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  moviesSearched: any = [];

  constructor(private ps: PeliculaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  searchMovie(movie: string) {
    // tslint:disable-next-line: triple-equals
/*     if (this.movie.length == 0) {
      return;
    } */
    this.ps.searchMovie(movie).subscribe(data => {
      this.moviesSearched = data;
    });
  }

  // tslint:disable-next-line: typedef
  viewMovieById(idMovie: number) {
    this.router.navigate(['/movie', idMovie]);
  }
}
