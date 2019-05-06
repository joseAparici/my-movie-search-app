import {TestBed} from '@angular/core/testing';

import {MovieListScrollService} from './movie-list-scroll.service';
import {MovieSearchResultImp} from '@app/movie-list/model/movie-search-result.imp';
import {Serializer} from '@app/core/services/serializer';
import {MovieSearchResult} from '@app/movie-list/model/movie-search-result';

describe('MovieListScrollService', () => {

  let movieListScrollService: MovieListScrollService;
  const serializer: Serializer = new Serializer();
  let mocks: any;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MovieListScrollService
    ]
  }));

  beforeEach(() => {
    movieListScrollService = TestBed.get(MovieListScrollService);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(movieListScrollService).toBeTruthy();
  });

  describe('calculateMedianByRating', () => {
    it('should calculate media by rating for odd elements', () => {
      const searchResultTwoDataElements = serializer.deserialize(mocks.movieSearchResultDataTwoElementsJson, MovieSearchResultImp) as MovieSearchResult;
      const result = movieListScrollService.calculateMedianByRating(searchResultTwoDataElements.data);
      expect(result).toBe((searchResultTwoDataElements.data[0].rating + searchResultTwoDataElements.data[1].rating) / 2);
    });

    it('should calculate media by rating for even elements', () => {
      const searchResultOneDataElement = serializer.deserialize(mocks.movieSearchResultDataOneElementJson, MovieSearchResultImp) as MovieSearchResult;
      const result = movieListScrollService.calculateMedianByRating(searchResultOneDataElement.data);
      expect(result).toBe(searchResultOneDataElement.data[0].rating);
    });
  });

  describe('hasMoreElements', () => {

    it('should return true if has more elements', () => {
      const searchResultOneDataElement = serializer.deserialize(mocks.movieSearchResultDataOneElementJson, MovieSearchResultImp) as MovieSearchResult;
      const result = movieListScrollService.hasMoreElements(searchResultOneDataElement.data, mocks.totalElementOne);
      expect(result).toBe(false);
    });

    it('should return false if has not more elements', () => {
      const searchResultTwoDataElements = serializer.deserialize(mocks.movieSearchResultDataTwoElementsJson, MovieSearchResultImp) as MovieSearchResult;
      const result = movieListScrollService.hasMoreElements(searchResultTwoDataElements.data, mocks.totalElementOne);
      expect(result).toBe(false);
    });
  });

  describe('updateResultData', () => {
    it('should update result data  with search result data if search result has not offset', () => {
      const searchResultOneDataElement = serializer.deserialize(mocks.movieSearchResultDataOneElementJson, MovieSearchResultImp) as MovieSearchResult;
      searchResultOneDataElement.metadata.offset = undefined;
      const result = movieListScrollService.updateResultData(searchResultOneDataElement, []);
      expect(result).toEqual(searchResultOneDataElement.data);
    });

    it('should update result data  with search result data if search result has not offset', () => {
      const searchResultOneDataElement = serializer.deserialize(mocks.movieSearchResultDataOneElementJson, MovieSearchResultImp) as MovieSearchResult;
      const searchResultTwoDataElement = serializer.deserialize(mocks.movieSearchResultDataTwoElementsJson, MovieSearchResultImp) as MovieSearchResult;

      const result = movieListScrollService.updateResultData(searchResultOneDataElement, [searchResultTwoDataElement.data[1]]);
      expect(result.length).toBe(2);
    });
  });

  function loadMocks() {
    mocks = {
      movieSearchResultDataOneElementJson: {
        'metadata': {
          'offset': 20,
          'limit': 20,
          'total': 1
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
      movieSearchResultDataTwoElementsJson: {
        'metadata': {
          'offset': 0,
          'limit': 20,
          'total': 2
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
          },
          {
            'id': 1724,
            'title': 'The Incredible Hulk',
            'tagline': 'You will like him when he is angry.',
            'overview': 'Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.',
            'popularity': 22.619048,
            'rating': 6.1,
            'ratingCount': 4283,
            'runtime': 114,
            'releaseDate': '2008-06-12',
            'revenue': 163712074,
            'budget': 150000000,
            'posterPath': '/bleR2qj9UluYl7x0Js7VXuLhV3s.jpg',
            'originalLanguage': 'en',
            'genres': [
              {
                'id': 878,
                'name': 'Science Fiction'
              },
              {
                'id': 28,
                'name': 'Action'
              },
              {
                'id': 12,
                'name': 'Adventure'
              }
            ],
            'cast': [
              {
                'id': 819,
                'gender': 2,
                'name': 'Edward Norton',
                'character': 'Bruce Banner / The Hulk',
                'profilePath': '/eIkFHNlfretLS1spAcIoihKUS62.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/eIkFHNlfretLS1spAcIoihKUS62.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 882,
                'gender': 1,
                'name': 'Liv Tyler',
                'character': 'Betty Ross',
                'profilePath': '/lD2YnrKdnRUvFDMSiK2pw13ZMIB.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/lD2YnrKdnRUvFDMSiK2pw13ZMIB.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 3129,
                'gender': 2,
                'name': 'Tim Roth',
                'character': 'Emil Blonsky / Abomination',
                'profilePath': '/hgaIXIW9GKnZhrweplBonG7uhhP.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/hgaIXIW9GKnZhrweplBonG7uhhP.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 227,
                'gender': 2,
                'name': 'William Hurt',
                'character': 'General Thaddeus \'Thunderbolt\' Ross',
                'profilePath': '/zp6UOht6c1iyHDbpYn1hkX103lG.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/zp6UOht6c1iyHDbpYn1hkX103lG.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 1462,
                'gender': 2,
                'name': 'Tim Blake Nelson',
                'character': 'Dr. Samuel Sterns',
                'profilePath': '/tWHHEnnoEU6aNaiFRvl1WLfNTvB.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/tWHHEnnoEU6aNaiFRvl1WLfNTvB.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 15232,
                'gender': 2,
                'name': 'Ty Burrell',
                'character': 'Dr. Leonard Samson',
                'profilePath': '/hJeOomahu5I7CgODCU9jh7oPsu6.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/hJeOomahu5I7CgODCU9jh7oPsu6.jpg',
                  'size': 'w185'
                }
              },
              {
                'id': 68277,
                'gender': 1,
                'name': 'Christina Cabot',
                'character': 'Major Kathleen Sparr',
                'profilePath': '/7UBTv5lW6apPdVLnOqTTBMTJWwY.jpg',
                'profileImage': {
                  'fullPath': 'https://image.tmdb.org/t/p/w185/7UBTv5lW6apPdVLnOqTTBMTJWwY.jpg',
                  'size': 'w185'
                }
              }
            ],
            'poster': {
              'fullPath': 'https://image.tmdb.org/t/p/w342/bleR2qj9UluYl7x0Js7VXuLhV3s.jpg',
              'size': 'w342'
            }
          }
        ]
      },
      totalElementOne: 1
    };
  }
});
