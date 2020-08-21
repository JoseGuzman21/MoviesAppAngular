import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Import routing
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { PeliculaService } from './services/pelicula.service';

// Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardsMoviesComponent } from './components/cards-movies/cards-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MoviesComponent,
    CardsMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  // Aquí va los servicios
  providers: [
    PeliculaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
