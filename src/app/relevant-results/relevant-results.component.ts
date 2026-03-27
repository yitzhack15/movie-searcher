import { Component, OnInit } from '@angular/core';
import { APIService } from '../APIServices/APIServices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relevant-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relevant-results.component.html',
  styleUrl: './relevant-results.component.css'
})

export class RelevantResultsComponent {

  popularMovies: any = [];

  constructor(private apiService: APIService) {}

  getPopularMovies() {
    this.apiService.getPopularMovies().subscribe(
      (response) => {
        this.popularMovies = response.results;
        //console.log('Popular Movies:', response);
      },
      (error) => {
        console.error('Error fetching popular movies:', error);
      }
    );
  }

  ngOnInit() {
    this.getPopularMovies();
  }

}
