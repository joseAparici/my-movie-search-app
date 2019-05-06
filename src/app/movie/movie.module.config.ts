import {InjectionToken} from '@angular/core';

export interface MovieModuleConfig {
  ROUTING: any;
  LABELS: any;
}

export const MOVIE_MODULE_CONSTANTS: MovieModuleConfig = {
  ROUTING: {
    VIEW: {
      EMPTY: ''
    }
  },
  LABELS: {
    ITEM: {
      FOOTER: {
        MORE_INFO: 'MORE INFO'
      }
    }
  }
};

export let MOVIE_MODULE_CONFIG = new InjectionToken<MovieModuleConfig>('movie.module.config');
