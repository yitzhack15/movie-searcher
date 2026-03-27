import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantResultsComponent } from './relevant-results.component';

describe('RelevantResultsComponent', () => {
  let component: RelevantResultsComponent;
  let fixture: ComponentFixture<RelevantResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelevantResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelevantResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
