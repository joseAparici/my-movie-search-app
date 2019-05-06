import {NgModule} from '@angular/core';
import {MovieListRoutingModule} from '@app/movie-list/movie-list-routing.module';
import {MoviesComponentMock} from '@app/movie-list/views/movies/movies.component.mock';
import {MovieListComponentMock} from '@app/movie-list/components/movie-list/movie-list.component.mock';
import {MovieSearchComponentMock} from '@app/movie-list/components/movie-search/movie-search.component.mock';
import {MovieListServiceMock} from '@app/movie-list/services/movie-list.service.mock';
import {MovieListRemoteMock} from '@app/movie-list/services/movie-list.remote.mock';
import {MovieListState} from '@app/movie-list/model/movie-list.state';
import {MoviesComponentResolverMock} from '@app/movie-list/services/movies-component-resolver.mock';
import {MOVIE_LIST_MODULE_CONFIG, MOVIE_LIST_MODULE_CONSTANTS} from '@app/movie-list/movie-list.module.config';
import {MovieListScrollServiceMock} from '@app/movie-list/services/movie-list-scroll.service.mock';

@NgModule({
  imports: [
    MovieListRoutingModule
  ],
  declarations: [
    MoviesComponentMock,
    MovieListComponentMock,
    MovieSearchComponentMock
  ],
  providers: [
    MovieListState,
    MovieListServiceMock,
    MovieListRemoteMock,
    MovieListScrollServiceMock,
    MoviesComponentResolverMock,
    {provide: MOVIE_LIST_MODULE_CONFIG, useValue: MOVIE_LIST_MODULE_CONSTANTS}
  ]
})

export class MovieListModuleMock {
}
