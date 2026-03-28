import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { APIService } from '../APIServices/APIServices.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-movie-genre',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-genre.component.html',
  styleUrl: './movie-genre.component.css'
})
export class MovieGenreComponent {
  movieGenres: any = [];

  @Output() genre = new EventEmitter<{id: number, name: string}>();

  constructor(private apiService: APIService, private router: Router) {}

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

  getClickedGenre(genreId: number, genreName: string) {
    const genre = { id: genreId, name: genreName };
    this.genre.emit(genre);
  }

  ngOnInit() {
    this.getMovieGenres();
  }
}
