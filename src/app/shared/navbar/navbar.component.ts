import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ps: PeliculaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  searchMovie(movie: string) {
    console.log('movie', movie);
    this.router.navigate(['search', movie]);
    /* this.ps.searchMovie(movie).subscribe(data => {
      console.log('data', data);
    }); */
  }
}
