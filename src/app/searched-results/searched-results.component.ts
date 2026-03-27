import { Component, Input } from '@angular/core';
import { APIService } from '../APIServices/APIServices.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searched-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searched-results.component.html',
  styleUrl: './searched-results.component.css'
})
export class SearchedResultsComponent {

  searchedMovies: any = [];
  @Input () textValue: string = '';
  
  constructor(private apiService: APIService) {
    this.textValue = '';
  }

  getMovies(){
    // Validate input
    if (!this.textValue || this.textValue.trim() === '') {
      alert('Please enter a valid search term');
      return;
    }

    this.apiService.getMovie(this.textValue.trim()).subscribe((data: any) => {
      if (!data.results || data.results.length === 0) {
        alert('No movies available for this specific request');
        this.searchedMovies = [];
      } else {
        this.searchedMovies = data.results;
      }
    });
  }
}
