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
   this.apiService.getMovie(this.textValue).subscribe((data: any) => {
      this.searchedMovies = data.results;
    });
  }

}
