import { Component } from '@angular/core';
import { PeliculaService } from './services/pelicula.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public ps: PeliculaService) {
    /* this.ps.getAllPopulares()
      .subscribe(data => console.log('most populares ', data));
    this.ps.searchMovie('batman')
      .subscribe(data => console.log('busqueda ', data)); */
  }
}
