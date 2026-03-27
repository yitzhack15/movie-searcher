import { Component, OnInit } from '@angular/core';
import { APIService } from '../APIServices/APIServices.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-genre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-genre.component.html',
  styleUrl: './movie-genre.component.css'
})
export class MovieGenreComponent {
  movieGenres: any = [];
  
  constructor(private apiService: APIService) {}

  getMovieGenres(){
    this.apiService.getMovieGenres().subscribe(
      (response) => {
        this.movieGenres = response.genres;
      },
      (error) => {
        console.error('Error fetching movie genres:', error);
      }
    );
  }

  ngOnInit() {
    this.getMovieGenres();
  }
}
