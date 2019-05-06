import {Injectable} from '@angular/core';
import {Genre} from '@app/movie/model/genre';
import {Subject} from 'rxjs/index';
import {MovieSearchResult} from '@app/movie-list/model/movie-search-result';
import {MovieSearchCriteria} from '@app/movie-list/model/movie-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class MovieListState {
  private _genres: Array<Genre>;
  private _movieSearchResult: MovieSearchResult;
  private _movieSearchCriteria: MovieSearchCriteria;

  movieSearchResult$ = new Subject<MovieSearchResult>();
  movieSearchCriteria$ = new Subject<MovieSearchCriteria>();

  constructor() {}

  get genres(): Array<Genre> {
    return this._genres;
  }

  set genres(genres: Array<Genre>) {
    this._genres = genres;
  }

  get movieSearchResult(): MovieSearchResult {
    return this._movieSearchResult;
  }

  set movieSearchResult(value: MovieSearchResult) {
    this._movieSearchResult = value;
    this.movieSearchResult$.next(this.movieSearchResult);
  }

  get movieSearchCriteria(): MovieSearchCriteria {
    return this._movieSearchCriteria;
  }

  set movieSearchCriteria(value: MovieSearchCriteria) {
    this._movieSearchCriteria = value;
    this.movieSearchCriteria$.next(this.movieSearchCriteria);
  }
}
