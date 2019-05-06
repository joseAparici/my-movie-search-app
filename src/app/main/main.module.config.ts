import {InjectionToken} from '@angular/core';

export interface MainModuleConfig {
  ROUTING: any;
}

export const MAIN_MODULE_CONSTANTS: MainModuleConfig = {
  ROUTING: {
    VIEW: {
      EMPTY: ''
    }
  }
};

export let MAIN_MODULE_CONFIG = new InjectionToken<MainModuleConfig>('main.module.config');
