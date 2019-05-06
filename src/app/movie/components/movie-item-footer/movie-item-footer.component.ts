import {Component, Inject} from '@angular/core';
import {MOVIE_MODULE_CONFIG, MovieModuleConfig} from '@app/movie/movie.module.config';

@Component({
  selector: 'mms-movie-item-footer',
  templateUrl: './movie-item-footer.component.html',
  styleUrls: ['./movie-item-footer.component.scss']
})
export class MovieItemFooterComponent {

  constructor(@Inject(MOVIE_MODULE_CONFIG) public movieModuleConfig: MovieModuleConfig) {
  }
}
