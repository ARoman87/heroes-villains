import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsRouteComponent } from './search-results-route.component';

describe('SearchResultsRouteComponent', () => {
  let component: SearchResultsRouteComponent;
  let fixture: ComponentFixture<SearchResultsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultsRouteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
