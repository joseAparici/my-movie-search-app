import {TestBed} from '@angular/core/testing';

import {MovieListService} from '@app/movie-list/services/movie-list.service';
import {MovieListServiceMock} from '@app/movie-list/services/movie-list.service.mock';
import {MoviesComponentResolver} from '@app/movie-list/services/movies-component-resolver.service';
import {ActivatedRouteSnapshot} from '@angular/router';

describe('MoviesComponentResolver', () => {
  let moviesComponentResolver: MoviesComponentResolver;
  let movieListService: MovieListService;
  let spies: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesComponentResolver,
        {provide: MovieListService, useClass: MovieListServiceMock}
      ]
    });
  });

  beforeEach(() => {
    moviesComponentResolver = TestBed.get(MoviesComponentResolver);
    movieListService = TestBed.get(MovieListService);
  });

  beforeEach(() => {
    loadMocks();
    initSpies();
  });

  it('should be created', () => {
    expect(moviesComponentResolver).toBeTruthy();
  });

  describe('resolve', () => {
    it('should call to movie list service loadGenres', () => {
      moviesComponentResolver.resolve(mocks.activatedRouteSnapshot, mocks.routerStateSnapshot);
      expect(spies.movieListService.loadGenres).toHaveBeenCalled();
    });
  });

  function loadMocks() {
    mocks = {
      activatedRouteSnapshot: new ActivatedRouteSnapshot(),
      routerStateSnapshot: ''
    };
  }

  function initSpies() {
    spies = {
      movieListService: {
        loadGenres: spyOn(movieListService, 'loadGenres').and.callThrough()
      }
    };
  }
});
