import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MoviesComponent} from '@app/movie-list/views/movies/movies.component';
import {MOVIE_LIST_MODULE_CONSTANTS} from '@app/movie-list/movie-list.module.config';
import {MoviesComponentResolver} from '@app/movie-list/services/movies-component-resolver.service';

const routes = [
  {
    path: MOVIE_LIST_MODULE_CONSTANTS.ROUTING.VIEW.EMPTY,
    component: MoviesComponent,
    resolve: {
      genres: MoviesComponentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MovieListRoutingModule {
}
