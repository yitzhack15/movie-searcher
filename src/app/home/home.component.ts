import { Component } from '@angular/core';
import { RelevantResultsComponent } from '../relevant-results/relevant-results.component';
import { SearchedResultsComponent } from '../searched-results/searched-results.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RelevantResultsComponent, SearchedResultsComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
