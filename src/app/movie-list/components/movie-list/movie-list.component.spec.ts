import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {MOVIE_LIST_MODULE_CONFIG, MOVIE_LIST_MODULE_CONSTANTS} from '@app/movie-list/movie-list.module.config';
import {MovieListComponent} from '@app/movie-list/components/movie-list/movie-list.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MovieModuleMock} from '@app/movie/movie.module.mock';
import {MovieListService} from '@app/movie-list/services/movie-list.service';
import {MovieListServiceMock} from '@app/movie-list/services/movie-list.service.mock';
import {MovieListScrollService} from '@app/movie-list/services/movie-list-scroll.service';
import {MovieListScrollServiceMock} from '@app/movie-list/services/movie-list-scroll.service.mock';

xdescribe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let debugElement: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        InfiniteScrollModule,
        MovieModuleMock
      ],
      declarations: [ MovieListComponent ],
      providers: [
        {provide: MovieListService, useClass: MovieListServiceMock},
        {provide: MovieListScrollService, useClass: MovieListScrollServiceMock},
        {provide: MOVIE_LIST_MODULE_CONFIG, useValue: MOVIE_LIST_MODULE_CONSTANTS}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template', () => {
    it('should have a div tag', () => {
      expect(debugElement.query(By.css('div'))).toBeTruthy();
    });
  });
});
