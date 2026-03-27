import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedResultsComponent } from './searched-results.component';

describe('SearchedResultsComponent', () => {
  let component: SearchedResultsComponent;
  let fixture: ComponentFixture<SearchedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
