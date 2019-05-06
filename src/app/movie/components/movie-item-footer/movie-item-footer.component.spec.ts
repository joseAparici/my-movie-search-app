import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieItemFooterComponent} from './movie-item-footer.component';
import {MatCardModule, MatDividerModule} from '@angular/material';
import {MOVIE_MODULE_CONFIG, MOVIE_MODULE_CONSTANTS} from '@app/movie/movie.module.config';

describe('MovieItemFooterComponent', () => {
  let component: MovieItemFooterComponent;
  let fixture: ComponentFixture<MovieItemFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        MatCardModule
      ],
      declarations: [MovieItemFooterComponent],
      providers: [
        {provide: MOVIE_MODULE_CONFIG, useValue: MOVIE_MODULE_CONSTANTS}

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
