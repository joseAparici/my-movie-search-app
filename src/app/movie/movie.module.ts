import {NgModule} from '@angular/core';
import {MOVIE_MODULE_CONFIG, MOVIE_MODULE_CONSTANTS} from '@app/movie/movie.module.config';
import {MovieItemHeaderComponent} from '@app/movie/components/movie-item-header/movie-item-header.component';
import {MovieItemFooterComponent} from '@app/movie/components/movie-item-footer/movie-item-footer.component';
import {MovieItemBodyComponent} from '@app/movie/components/movie-item-body/movie-item-body.component';
import {MovieItemComponent} from '@app/movie/components/movie-item/movie-item.component';
import {SharedModule} from '@app/shared/shared.module';
import {MovieService} from '@app/movie/services/movie.service';

@NgModule({
  declarations: [
    MovieItemComponent,
    MovieItemHeaderComponent,
    MovieItemBodyComponent,
    MovieItemFooterComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MovieItemComponent,
    MovieItemHeaderComponent,
    MovieItemBodyComponent,
    MovieItemFooterComponent
  ],
  providers: [
    MovieService,
    {provide: MOVIE_MODULE_CONFIG, useValue: MOVIE_MODULE_CONSTANTS}
  ]
})
export class MovieModule { }
