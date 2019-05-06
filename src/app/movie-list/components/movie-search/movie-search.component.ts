import {Component, Inject, OnInit} from '@angular/core';
import {NotificationService} from '@app/core/notification/services/notification.service';
import {NotificationType} from '@app/core/notification/model/notification-type.enum';
import {MovieListService} from '@app/movie-list/services/movie-list.service';
import {MOVIE_LIST_MODULE_CONFIG, MovieListModuleConfig} from '@app/movie-list/movie-list.module.config';
import {MovieSearchCriteriaImp} from '@app/movie-list/model/movie-search-criteria.imp';

@Component({
  selector: 'mms-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movieListSearchLabels: any;
  public searchTerm: string;

  constructor(private movieListService: MovieListService,
              private notificationService: NotificationService,
              @Inject(MOVIE_LIST_MODULE_CONFIG) private movieListModuleConfig: MovieListModuleConfig) {
  }

  ngOnInit() {
    this.movieListSearchLabels = this.movieListModuleConfig.LABELS.SEARCH;
  }

  search() {
    const defaultSearchRating = this.movieListModuleConfig.SEARCH.RATING.default;
    const defaultSearchOffset = this.movieListModuleConfig.SEARCH.OFFSET.default;
    const defaultSearchLimit = this.movieListModuleConfig.SEARCH.LIMIT.default;

    if (!this.movieListService.search(new MovieSearchCriteriaImp(this.searchTerm, defaultSearchRating, defaultSearchOffset, defaultSearchLimit))) {
      this.notificationService.show(this.movieListSearchLabels.ERROR, NotificationType.ERROR);
      this.searchTerm = '';
    }
  }
}
