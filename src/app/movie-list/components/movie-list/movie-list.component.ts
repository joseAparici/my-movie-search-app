import {Component, Inject, OnDestroy} from '@angular/core';
import {MOVIE_LIST_MODULE_CONFIG, MovieListModuleConfig} from '@app/movie-list/movie-list.module.config';
import {MovieListService} from '@app/movie-list/services/movie-list.service';
import {Subscription, zip} from 'rxjs/index';
import {MovieSearchCriteria} from '@app/movie-list/model/movie-search-criteria';
import {Movie} from '@app/movie/model/movie';
import {MovieListScrollService} from '@app/movie-list/services/movie-list-scroll.service';

@Component({
  selector: 'mms-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnDestroy {

  movieListLabels: any;

  public currentMovieSearchResultData: Array<Movie> = [];
  public currentMovieSearchCriteria: MovieSearchCriteria;
  public moviesMedianRate: number;
  private _hasMoreResults = false;
  private _subscriptions = new Subscription();

  constructor(@Inject(MOVIE_LIST_MODULE_CONFIG) private movieListModuleConfig: MovieListModuleConfig,
              private movieListService: MovieListService,
              private movieListScrollService: MovieListScrollService) {
    this.movieListLabels = this.movieListModuleConfig.LABELS.LIST;
    this.moviesMedianRate = 0;
    this.subscribeToCurrentMovieSearchResult();
  }

  private subscribeToCurrentMovieSearchResult() {
    this._subscriptions.add(
      zip(this.movieListService.currentMovieSearchCriteria(), this.movieListService.currentMovieSearchResult())
        .subscribe(([movieSearchCriteria, movieSearchResult]) => {
          this.currentMovieSearchCriteria = movieSearchCriteria;
          this.currentMovieSearchResultData = this.movieListScrollService.updateResultData(movieSearchResult, this.currentMovieSearchResultData);
          this.moviesMedianRate = this.movieListScrollService.calculateMedianByRating(this.currentMovieSearchResultData.slice());
          this._hasMoreResults = this.movieListScrollService.hasMoreElements(this.currentMovieSearchResultData, movieSearchResult.metadata.total);
        }));
  }

  onScroll() {
    if (this._hasMoreResults) {
      this.movieListService.search(this.currentMovieSearchCriteria);
    }
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

}
