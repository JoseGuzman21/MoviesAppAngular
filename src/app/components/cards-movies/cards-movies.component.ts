import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-movies',
  templateUrl: './cards-movies.component.html',
  styleUrls: ['./cards-movies.component.css']
})
export class CardsMoviesComponent implements OnInit {

  @Input() movies: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  viewMovieById(idMovie: number) {
    /* console.log('idMovie: ', idMovie); */
    this.router.navigate(['/movie', idMovie, 'home']);
  }

}
