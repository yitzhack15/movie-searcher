import { Component, Input } from '@angular/core';
import { APIService } from '../APIServices/APIServices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-by-genre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-by-genre.component.html',
  styleUrl: './movies-by-genre.component.css'
})

export class MoviesByGenreComponent {
  moviesByGenre: any = [];

  @Input() genre: {id: number | null, name: string | null} | null = null;

  constructor(private apiService: APIService) {}

  getMoviesByGenre() {
    if (!this.genre?.id){

      return;
    }
    this.apiService.getMovieByGenre(this.genre.id).subscribe(data => {
      this.moviesByGenre = data.results;
    });
  }

  ngOnChanges() {
    this.getMoviesByGenre();
  }

}
