import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apiKey = '2f150d1b6ebe88eefaa46862d49226bf';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  peliculas: any[] = [];

  constructor(private jsonp: HttpClientJsonpModule,
              private http: HttpClient) {
}

// tslint:disable-next-line: typedef
  getAllMoviesTheatres() {
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.apiKey}`;
    return this.http.get(url)
              .pipe(map(data => data['results']));
  }

  // tslint:disable-next-line: typedef
  getAllPopularsMovies() {
    // at final &callback=JSONP_CALLBACK
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&lenguage=es`;
    return this.http.get(url)
              .pipe(map(data => data['results']));
  }

  // tslint:disable-next-line: typedef
  getAllPopularsKidsMovies() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&lenguage=es`;
    return this.http.get(url)
              .pipe(map(data => data['results']));
  }

  // tslint:disable-next-line: typedef
  searchMovie(keyword: string ){
    const url = `${ this.urlMoviedb }/search/movie?query=${keyword}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url)
                .pipe(map(data => data['results']));
  }

  // tslint:disable-next-line: typedef
  getMovieById(idMovie: string) {
    // movie/286554?api_key=2f150d1b6ebe88eefaa46862d49226bf&language=en-US
      const url = `${this.urlMoviedb}/movie/${idMovie}?api_key=${this.apiKey}&lenguage=en-US`;
      return this.http.get(url)
                .pipe(map((data: any[]) => {
                  this.peliculas = data;
                  return data;
        }));
  }
}
