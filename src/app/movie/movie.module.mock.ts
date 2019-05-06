import {NgModule} from '@angular/core';
import {MOVIE_MODULE_CONFIG, MOVIE_MODULE_CONSTANTS} from '@app/movie/movie.module.config';
import {MovieItemComponentMock} from '@app/movie/components/movie-item/movie-item.component.mock';
import {MovieItemHeaderComponentMock} from '@app/movie/components/movie-item-header/movie-item-header.component.mock';
import {MovieItemBodyComponentMock} from '@app/movie/components/movie-item-body/movie-item-body.component.mock';
import {MovieItemFooterComponentMock} from '@app/movie/components/movie-item-footer/movie-item-footer.component.mock';

@NgModule({
  declarations: [
    MovieItemComponentMock,
    MovieItemHeaderComponentMock,
    MovieItemBodyComponentMock,
    MovieItemFooterComponentMock
  ],
  exports: [
    MovieItemComponentMock,
    MovieItemHeaderComponentMock,
    MovieItemBodyComponentMock,
    MovieItemFooterComponentMock
  ],
  imports: [],
  providers: [
    {provide: MOVIE_MODULE_CONFIG, useValue: MOVIE_MODULE_CONSTANTS}
  ]
})
export class MovieModuleMock {
}
