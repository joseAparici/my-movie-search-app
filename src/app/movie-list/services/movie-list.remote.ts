import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Genre} from '@app/movie/model/genre';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {Serializer} from '@app/core/services/serializer';
import {GenreImp} from '@app/movie/model/genre.imp';
import {MOVIE_LIST_MODULE_CONFIG, MovieListModuleConfig} from '@app/movie-list/movie-list.module.config';
import {MovieSearchResultImp} from '@app/movie-list/model/movie-search-result.imp';
import {MovieSearchResult} from '@app/movie-list/model/movie-search-result';
import {MovieSearchCriteria} from '@app/movie-list/model/movie-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class MovieListRemote extends Serializer {

  constructor(@Inject(MOVIE_LIST_MODULE_CONFIG) private movieListModuleConfig: MovieListModuleConfig,
              private http: HttpClient) {
    super();
  }

  getGenres(): Observable<Array<Genre>> {
    return this.http.get(this.movieListModuleConfig.REMOTES.GENRES.GET.URL).pipe(
      map((data: any) => this.deserialize(data, GenreImp) as Array<Genre>)
    );
  }

  getMovies(searchCriteria: MovieSearchCriteria): Observable<MovieSearchResult> {
    const httpParams = new HttpParams()
      .set(this.movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.GENRE, searchCriteria.genre)
      .set(this.movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.RATING, searchCriteria.rating ? searchCriteria.rating.toString() : this.movieListModuleConfig.SEARCH.RATING.default.toString())
      .set(this.movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.OFFSET, searchCriteria.offset ? searchCriteria.offset.toString() : this.movieListModuleConfig.SEARCH.OFFSET.default.toString())
      .set(this.movieListModuleConfig.REMOTES.MOVIES.GET.QUERY_PARAMS.LIMIT, searchCriteria.limit ? searchCriteria.limit.toString() : this.movieListModuleConfig.SEARCH.LIMIT.default.toString());

    return this.http.get(this.movieListModuleConfig.REMOTES.MOVIES.GET.URL, {params: httpParams}).pipe(
      map((data: any) => {
        return this.deserialize(data, MovieSearchResultImp) as MovieSearchResult;
      })
    );
  }

}
