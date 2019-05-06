import {InjectionToken} from '@angular/core';
import {APP_MODULE_CONSTANTS} from '@app/app.module.config';

export interface MovieListModuleConfig {
  ROUTING: any;
  REMOTES: any;
  LABELS: any;
  SEARCH: any;
}

export const MOVIE_LIST_MODULE_CONSTANTS: MovieListModuleConfig = {
  ROUTING: {
    VIEW: {
      EMPTY: ''
    }
  },
  REMOTES: {
    GENRES: {
      GET: {
        URL: APP_MODULE_CONSTANTS.BASE_URL + 'genres.json'
      }
    },
    MOVIES: {
      GET: {
        URL: APP_MODULE_CONSTANTS.BASE_URL + 'movies.json',
        QUERY_PARAMS: {
          GENRE: 'genre',
          RATING: 'rating',
          OFFSET: 'offset',
          LIMIT: 'limit'
        }
      }
    }
  },
  LABELS: {
    SEARCH: {
      INPUT_PLACEHOLDER: 'Enter genre',
      BUTTON: 'SEARCH',
      SUCCESS: 'Genre search success',
      ERROR: 'Genre search error'
    },
    LIST: {
      INITIAL_TEXT: 'Please enter a genre<br/>to find movies<br/> e.g. Action'
    }
  },
  SEARCH: {
    RATING: {
      default: 1
    },
    OFFSET: {
      default: 0
    },
    LIMIT: {
      default: 20
    }
  }
};

export let MOVIE_LIST_MODULE_CONFIG = new InjectionToken<MovieListModuleConfig>('movie-list.module.config');
