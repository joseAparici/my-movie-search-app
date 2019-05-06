import {NgModule} from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {MoviesComponent} from '@app/movie-list/views/movies/movies.component';
import {MovieListRoutingModule} from '@app/movie-list/movie-list-routing.module';
import {MOVIE_LIST_MODULE_CONFIG, MOVIE_LIST_MODULE_CONSTANTS} from '@app/movie-list/movie-list.module.config';
import {MovieListComponent} from '@app/movie-list/components/movie-list/movie-list.component';
import {MovieSearchComponent} from '@app/movie-list/components/movie-search/movie-search.component';
import {MovieListService} from '@app/movie-list/services/movie-list.service';
import {MovieListRemote} from '@app/movie-list/services/movie-list.remote';
import {MovieListState} from '@app/movie-list/model/movie-list.state';
import {MoviesComponentResolver} from '@app/movie-list/services/movies-component-resolver.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MovieListScrollService} from '@app/movie-list/services/movie-list-scroll.service';
import {MovieModule} from '@app/movie/movie.module';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieListComponent,
    MovieSearchComponent
  ],
  imports: [
    MovieListRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    MovieModule
  ],
  exports: [MoviesComponent],
  providers: [
    MovieListState,
    MovieListService,
    MovieListRemote,
    MovieListScrollService,
    MoviesComponentResolver,
    {provide: MOVIE_LIST_MODULE_CONFIG, useValue: MOVIE_LIST_MODULE_CONSTANTS}
  ]
})
export class MovieListModule { }
