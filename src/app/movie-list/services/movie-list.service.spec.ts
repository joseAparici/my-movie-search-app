import {async, TestBed} from '@angular/core/testing';
import {MovieListRemoteMock} from '@app/movie-list/services/movie-list.remote.mock';
import {MovieListRemote} from '@app/movie-list/services/movie-list.remote';
import {MovieListService} from '@app/movie-list/services/movie-list.service';
import {MovieListState} from '@app/movie-list/model/movie-list.state';
import {GenreImp} from '@app/movie/model/genre.imp';
import {Observable, of} from 'rxjs/index';
import {MOVIE_LIST_MODULE_CONFIG, MOVIE_LIST_MODULE_CONSTANTS} from '@app/movie-list/movie-list.module.config';
import {MovieSearchCriteriaImp} from '@app/movie-list/model/movie-search-criteria.imp';

describe('MovieListService', () => {
  let movieListService: MovieListService;
  let movieListRemote: MovieListRemote;
  let movieListState: MovieListState;
  let spies: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieListService,
        MovieListState,
        {provide: MovieListRemote, useClass: MovieListRemoteMock},
        {provide: MOVIE_LIST_MODULE_CONFIG, useValue: MOVIE_LIST_MODULE_CONSTANTS}

      ]
    });
  });

  beforeEach(() => {
    movieListService = TestBed.get(MovieListService);
    movieListRemote = TestBed.get(MovieListRemote);
    movieListState = TestBed.get(MovieListState);
  });

  beforeEach(() => {
    loadMocks();
    initSpies();
  });

  it('should be created', () => {
    expect(movieListService).toBeTruthy();
  });

  describe('load genres', () => {
    it('should call to remote if genres is not loaded on state', () => {
      spies.movieListRemote.getGenres.and.returnValue(of(mocks.genres));
      movieListService.loadGenres();
      expect(spies.movieListRemote.getGenres).toHaveBeenCalled();
    });

    it('should set genres on state if genres are not loaded', async(() => {
      spies.movieListRemote.getGenres.and.returnValue(of(mocks.genres));
      movieListService.loadGenres().subscribe();
      expect(spies.movieListRemote.getGenres).toHaveBeenCalled();
      expect(movieListState.genres).toBe(mocks.genres);
    }));

    it('should not call to remote if genres is are loaded on state', () => {
      movieListState.genres = mocks.genres;
      movieListService.loadGenres();
      expect(spies.movieListRemote.getGenres).not.toHaveBeenCalled();
    });
  });

  describe('search', () => {
    it('should return true if search term is found', () => {
      movieListState.genres = mocks.genres;
      const result = movieListService.search(mocks.searchTerms.oneGenreExists);
      expect(result).toBe(true);
    });

    it('should return true if search term has two genres and the first one exists', () => {
      movieListState.genres = mocks.genres;
      const result = movieListService.search(mocks.searchTerms.twoGenresExistsFirst);
      expect(result).toBe(true);
    });

    it('should return true if search term has two words and it exists', () => {
      movieListState.genres = mocks.genres;
      const result = movieListService.search(mocks.searchTerms.oneGenreTwoWordsExists);
      expect(result).toBe(true);
    });

    it('should return false if search term has two genres and the second one exists', () => {
      movieListState.genres = mocks.genres;
      const result = movieListService.search(mocks.searchTerms.twoGenresExistsSecond);
      expect(result).toBe(false);
    });

    it('should return false if search term is not found', () => {
      movieListState.genres = mocks.genres;
      const result = movieListService.search(mocks.searchTerms.oneGenreNotExists);
      expect(result).toBe(false);
    });
  });

  describe('currentMovieSearchResult', () => {
    it('should return current movie search result as observable ', () => {
      const result = movieListService.currentMovieSearchResult();
      expect(result instanceof Observable).toBe(true);
    });
  });

  describe('currentMovieSearchCriteria', () => {
    it('should return current movie search criteria as observable ', () => {
      const result = movieListService.currentMovieSearchCriteria();
      expect(result instanceof Observable).toBe(true);
    });
  });

  function loadMocks() {
    mocks = {
      genres: [
        new GenreImp(1, 'genreOne'),
        new GenreImp(2, 'genreTwo'),
        new GenreImp(3, 'genre three')
      ],
      searchTerms: {
        oneGenreExists: new MovieSearchCriteriaImp('genreOne'),
        oneGenreNotExists: new MovieSearchCriteriaImp('notExists'),
        oneGenreTwoWordsExists: new MovieSearchCriteriaImp('genre three'),
        twoGenresExistsFirst: new MovieSearchCriteriaImp('genreOne notExists'),
        twoGenresExistsSecond: new MovieSearchCriteriaImp('notExists genreOne')
      }
    };
  }

  function initSpies() {
    spies = {
      movieListRemote: {
        getGenres: spyOn(movieListRemote, 'getGenres').and.callThrough(),
        getMovies: spyOn(movieListRemote, 'getMovies').and.returnValue(of([])),
      }
    };
  }
});
