import {InjectionToken} from '@angular/core';

export interface AppModuleConfig {
  TITLE: string;
  ROUTING: {
    PATH: any,
    VIEW: any
  };
  BASE_URL: string;
}

export const APP_MODULE_CONSTANTS: AppModuleConfig = {
  TITLE: 'My Movie Search',
  ROUTING: {
    PATH: {
      EMPTY: ''
    },
    VIEW: {
      EMPTY: ''
    }
  },
  BASE_URL: 'assets/static/data/'
};

export let APP_MODULE_CONFIG = new InjectionToken<AppModuleConfig>('app.module.config');
