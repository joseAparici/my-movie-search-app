import {TestBed} from '@angular/core/testing';

import {MovieService} from './movie.service';
import {GenreImp} from '@app/movie/model/genre.imp';

describe('MovieService', () => {
  let movieService: MovieService;
  let mocks: any;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MovieService
    ]
  }));

  beforeEach(() => {
    movieService = TestBed.get(MovieService);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  describe('generateGenresCommaList', () => {
    it('should generate genres comma list', () => {
      const result = movieService.generateGenresCommaList(mocks.genres);
      expect(result).toEqual('genreOne,genreTwo,genre three');
    });
  });

  function loadMocks() {
    mocks = {
      genres: [
        new GenreImp(1, 'genreOne'),
        new GenreImp(2, 'genreTwo'),
        new GenreImp(3, 'genre three')
      ]
    };
  }
});
