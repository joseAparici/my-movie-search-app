import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {
  MOVIE_LIST_MODULE_CONFIG,
  MOVIE_LIST_MODULE_CONSTANTS,
  MovieListModuleConfig
} from '@app/movie-list/movie-list.module.config';
import {MovieListServiceMock} from '@app/movie-list/services/movie-list.service.mock';
import {NotificationServiceMock} from '@app/core/notification/services/notification.service.mock';
import {HttpClientModule} from '@angular/common/http';
import {MovieListService} from '@app/movie-list/services/movie-list.service';
import {NotificationService} from '@app/core/notification/services/notification.service';
import {MovieSearchComponent} from '@app/movie-list/components/movie-search/movie-search.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NotificationType} from '@app/core/notification/model/notification-type.enum';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {MovieSearchCriteriaImp} from '@app/movie-list/model/movie-search-criteria.imp';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let movieListService: MovieListService;
  let notificationService: NotificationService;
  let movieListModuleConfig: MovieListModuleConfig;
  let fixture: ComponentFixture<MovieSearchComponent>;
  let debugElement: DebugElement;
  let spies: any;
  let mocks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        NoopAnimationsModule
      ],
      declarations: [MovieSearchComponent],
      providers: [
        {provide: MovieListService, useClass: MovieListServiceMock},
        {provide: NotificationService, useClass: NotificationServiceMock},
        {provide: MOVIE_LIST_MODULE_CONFIG, useValue: MOVIE_LIST_MODULE_CONSTANTS}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    movieListService = TestBed.get(MovieListService);
    notificationService = TestBed.get(NotificationService);
    movieListModuleConfig = TestBed.get(MOVIE_LIST_MODULE_CONFIG);
  });

  beforeEach(() => {
    initSpies();
    loadMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search', () => {
    it('should call to movie list service search method',  () => {
      component.searchTerm = mocks.searchTerm;
      component.search();
      expect(spies.moviesListService.search).toHaveBeenCalledWith(mocks.searchCriteria);
    });

    it('should call notification service with error message if search method returns false',  () => {
      spies.moviesListService.search.and.returnValue(false);
      component.search();
      expect(spies.notificationService.show).toHaveBeenCalledWith(mocks.notification.error, NotificationType.ERROR);
    });
  });

  describe('template', () => {

    it('should have a mat-form-field component', () => {
      expect(debugElement.query(By.css('mat-form-field'))).toBeTruthy();
    });

    it('should have a input tag', () => {
      expect(debugElement.query(By.css('input'))).toBeTruthy();
    });

    it('should have a button component', () => {
      expect(debugElement.query(By.css('button'))).toBeTruthy();
    });
  });

  function loadMocks() {
    mocks = {
      searchTerm: 'searchTerm',
      searchCriteria: new MovieSearchCriteriaImp('searchTerm', movieListModuleConfig.SEARCH.RATING.default, movieListModuleConfig.SEARCH.OFFSET.default, movieListModuleConfig.SEARCH.LIMIT.default),
      notification: {
        error: movieListModuleConfig.LABELS.SEARCH.ERROR
      }
    };
  }

  function initSpies() {
    spies = {
      moviesListService: {
        search: spyOn(movieListService, 'search').and.callThrough()
      },
      notificationService: {
        show: spyOn(notificationService, 'show').and.callThrough()
      }
    };
  }
});
