import {TestBed} from '@angular/core/testing';
import {
  MOVIE_LIST_MODULE_CONFIG,
  MOVIE_LIST_MODULE_CONSTANTS,
  MovieListModuleConfig
} from '@app/movie-list/movie-list.module.config';
import {MovieListRemote} from '@app/movie-list/services/movie-list.remote';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GenreImp} from '@app/movie/model/genre.imp';
import {MovieSearchCriteriaImp} from '@app/movie-list/model/movie-search-criteria.imp';
import {MovieSearchResultImp} from '@app/movie-list/model/movie-search-result.imp';
import {HttpParams} from '@angular/common/http';

describe('MovieListRemote', () => {
  let movieListRemote: MovieListRemote;
  let movieListModuleConfig: MovieListModuleConfig;
  let httpMock: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MovieListRemote,
        {provide: MOVIE_LIST_MODULE_CONFIG, useValue: MOVIE_LIST_MODULE_CONSTANTS}
      ]
    });
  });

  beforeEach(() => {
    movieListRemote = TestBed.get(MovieListRemote);
    httpMock = TestBed.get(HttpTestingController);
    movieListModuleConfig = TestBed.get(MOVIE_LIST_MODULE_CONFIG);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(movieListRemote).toBeTruthy();
  });

  describe('get genres', () => {
    it('should do a http request',  (done) => {
      movieListRemote.getGenres().subscribe((res: any) => {
        expect(res[0] instanceof GenreImp).toBe(true);
        expect(res[0].id).toBe(mocks.genresJson[0].id);
        expect(res[0].name).toBe(mocks.genresJson[0].name);
        done();
      });

      const genresRequest = httpMock.expectOne(movieListModuleConfig.REMOTES.GENRES.GET.URL);
      genresRequest.flush(mocks.genresJson);
      httpMock.verify();
    });
  });

  describe('get movies', () => {
    it('should do a http request', (done) => {
      movieListRemote.getMovies(mocks.searchCriteriaWithValues).subscribe((res: any) => {
        expect(res instanceof MovieSearchResultImp).toBe(true);
        done();
      });

      const moviesRequest = httpMock.expectOne(/.+/);
      moviesRequest.flush(mocks.movieSearchResultJson);
      httpMock.verify();
    });

    it('should do a http request', (done) => {
      movieListRemote.getMovies(mocks.searchCriteriaWithoutValues).subscribe((res: any) => {
        expect(res instanceof MovieSearchResultImp).toBe(true);
        done();
      });

      const moviesRequest = httpMock.expectOne(/.+/);
      moviesRequest.flush(mocks.movieSearchResultJson);
      httpMock.verify();
    });

  });

  function loadMocks() {
    mocks = {
      genresJson: [{id: 1, name: 'genreOne'}],
      movieSearchResultJson: {
        'metadata': {
          'offset': 0,
          'limit': 20,
          'total': 114
        },
        'data': [
          {
            'id': 1893,
            'title': 'Star Wars: Episode I - The Phantom Menace',
            'tagline': 'Every generation has a legend. Every journey has a first step. Every saga has a beginning.',
            'overview': 'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.',
            'popularity': 22.71543,
            'rating': 6.4,
            'ratingCount': 6085,
            'runtime': 136,
            'releaseDate': '1999-05-19',
            'revenue': 924317558,
            'budget': 115000000,
            'posterPath': '/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg',
            'originalLanguage': 'en',
            'genres': [
              {
                'id': 12,
                'name': 'Adventure'
              },
              {
                'id': 28,
                'name': 'Action'
              },
              {
                'id': 878,
                'name': 'Science Fiction'
              }
            ],
            'cast': [
              {
                'id': 3896,
                'gender': 2,
                'name': 'Liam Neeson',
                'character': 'Qui-Gon Jinn',
                'profilePath': '/9mdAohLsDu36WaXV2N3SQ388bvz.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/9mdAohLsDu36WaXV2N3SQ388bvz.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 3061,
                'gender': 2,
                'name': 'Ewan McGregor',
                'character': 'Obi Wan Kenobi',
                'profilePath': '/aEmyadfRXTmmR7UW7OXsm5a6smS.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/aEmyadfRXTmmR7UW7OXsm5a6smS.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 524,
                'gender': 1,
                'name': 'Natalie Portman',
                'character': 'Padmé Amidala',
                'profilePath': '/rtLTG4yrEcROXhTBGXMrbyiUEC5.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/rtLTG4yrEcROXhTBGXMrbyiUEC5.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 33196,
                'gender': 2,
                'name': 'Jake Lloyd',
                'character': 'Anakin Skywalker',
                'profilePath': '/1MndIkdjjDypRDi3PpMzy3j0Lof.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/1MndIkdjjDypRDi3PpMzy3j0Lof.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 27762,
                'gender': 2,
                'name': 'Ian McDiarmid',
                'character': 'Senator Palpatine',
                'profilePath': '/sa6FTcK7xCHCFFR10jyOOOffd7f.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/sa6FTcK7xCHCFFR10jyOOOffd7f.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 6,
                'gender': 2,
                'name': 'Anthony Daniels',
                'character': 'C-3PO (voice)',
                'profilePath': '/cljvryjb3VwTsNR7fjQKjNPMaBB.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/cljvryjb3VwTsNR7fjQKjNPMaBB.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 130,
                'gender': 2,
                'name': 'Kenny Baker',
                'character': 'R2-D2',
                'profilePath': '/sdd9rgifNF9C51RejG7sUGU8Bka.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/sdd9rgifNF9C51RejG7sUGU8Bka.jpg',
                  'size': 'w185'
                }
              }
            ],
            'poster': {
              'fullPath': 'https://image.tmdb.org/t/p/w342/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg',
              'size': 'w342'
            }
          }
        ]
      },
      searchCriteriaWithValues: new MovieSearchCriteriaImp('genre', 1, 1, 1),
      searchCriteriaWithoutValues: new MovieSearchCriteriaImp('genre'),
      httpParams: new HttpParams()
        .set(movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.GENRE, 'genre')
        .set(movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.RATING, '1')
        .set(movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.OFFSET, '1')
        .set(movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.LIMIT, '1')
    };
  }
});
