import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {Genre} from '@app/movie/model/genre';
import {MovieListState} from '@app/movie-list/model/movie-list.state';
import {MovieListRemote} from '@app/movie-list/services/movie-list.remote';
import {map} from 'rxjs/internal/operators';
import {isEmpty as _isEmpty} from 'lodash';
import {MovieSearchResult} from '@app/movie-list/model/movie-search-result';
import {MOVIE_LIST_MODULE_CONFIG, MovieListModuleConfig} from '@app/movie-list/movie-list.module.config';
import {MovieSearchCriteria} from '@app/movie-list/model/movie-search-criteria';
import {MovieSearchCriteriaImp} from '@app/movie-list/model/movie-search-criteria.imp';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  private static splitSearchTerm(searchTerm: string): string[] {
    const termSplitted = searchTerm.toUpperCase().trim().split(' ');
    if (termSplitted.length > 1) {
      return [termSplitted[0], termSplitted[1]];
    } else {
      return termSplitted;
    }
  }

  constructor(@Inject(MOVIE_LIST_MODULE_CONFIG) private movieListModuleConfig: MovieListModuleConfig,
              private movieListRemote: MovieListRemote,
              private movieListState: MovieListState) {
  }

  loadGenres(): Observable<Array<Genre>> {
    if (!_isEmpty(this.movieListState.genres)) {
      return of(this.movieListState.genres);
    } else {
      return this.getGenres().pipe(
        map(() => this.movieListState.genres)
      );
    }
  }

  private getGenres(): Observable<void> {
    return this.movieListRemote.getGenres().pipe(
      map((genres: Array<Genre>) => {
        this.movieListState.genres = genres;
      })
    );
  }

  search(searchCriteria: MovieSearchCriteria): boolean {
    const searchTermValid = this.validateSearchTerm(searchCriteria.genre);
    if (searchTermValid) {
      searchCriteria.genre = searchTermValid.name;
      this.movieListRemote.getMovies(searchCriteria).subscribe((movieSearchResult: MovieSearchResult) => {
        this.movieListState.movieSearchCriteria = new MovieSearchCriteriaImp(searchCriteria.genre, searchCriteria.rating, searchCriteria.offset + this.movieListModuleConfig.SEARCH.LIMIT.default, searchCriteria.limit);
        this.movieListState.movieSearchResult = movieSearchResult;
        }
      );
      return true;
    } else {
      return false;
    }
  }

  private validateSearchTerm(searchTerm: string): Genre {
    const searchTermSplitted = MovieListService.splitSearchTerm(searchTerm);
    return this.movieListState.genres.find((genre: Genre) =>
      searchTermSplitted.length > 1 ?
        genre.name.toUpperCase() === searchTermSplitted[0] || genre.name.toUpperCase() === `${searchTermSplitted[0]} ${searchTermSplitted[1]}` :
        genre.name.toUpperCase() === searchTermSplitted[0]);
  }

  currentMovieSearchResult(): Observable<MovieSearchResult> {
    return this.movieListState.movieSearchResult$.asObservable();
  }

  currentMovieSearchCriteria(): Observable<MovieSearchCriteria> {
    return this.movieListState.movieSearchCriteria$.asObservable();
  }
}

