import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ps: PeliculaService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  searchMovie(movie: string) {
    this.ps.searchMovie(movie).subscribe(data => {
      console.log('data', data);
    });
  }
}
