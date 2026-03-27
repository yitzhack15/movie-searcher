import { Routes } from '@angular/router';
import { RelevantResultsComponent } from './relevant-results/relevant-results.component';
import { SearchedResultsComponent } from './searched-results/searched-results.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    }, 
    {
        path: 'relevant-results',
        component: RelevantResultsComponent
    },
    {
        path: 'searched-results',
        component: SearchedResultsComponent
    }
];
