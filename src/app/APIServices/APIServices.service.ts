import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

//addb44ab35b45d3a9ccfcd1c384ad541

export class APIService {
    
    private apiUrl = 'https://api.themoviedb.org/3/';

    private endpoints = {
        popularMovies: 'movie/popular',
        searchMovies: 'search/movie', 
        genres: 'genre/movie/list'
    };
    
    private apiKey = 'addb44ab35b45d3a9ccfcd1c384ad541';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}${this.endpoints.popularMovies}?api_key=${this.apiKey}`
    );
  }

  getMovie(value: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}${this.endpoints.searchMovies}?api_key=${this.apiKey}&query=${value}`
    );
  }

  getMovieGenres(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}${this.endpoints.genres}?api_key=${this.apiKey}`
    );
  }
}