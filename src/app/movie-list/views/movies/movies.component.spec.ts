import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MovieSearchComponentMock} from '@app/movie-list/components/movie-search/movie-search.component.mock';
import {MovieListComponentMock} from '@app/movie-list/components/movie-list/movie-list.component.mock';
import {MoviesComponent} from '@app/movie-list/views/movies/movies.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('MoviesComponent', () => {
  let fixture: ComponentFixture<MoviesComponent>;
  let component: MoviesComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        MoviesComponent,
        MovieSearchComponentMock,
        MovieListComponentMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template', () => {

    it('should have a mms-movie-search component', () => {
      expect(debugElement.query(By.css('mms-movie-search'))).toBeTruthy();
    });

    it('should have a mms-movie-list component', () => {
      expect(debugElement.query(By.css('mms-movie-list'))).toBeTruthy();
    });
  });
});
