import {Injectable} from '@angular/core';
import {Movie} from '@app/movie/model/movie';
import {MovieSearchResult} from '@app/movie-list/model/movie-search-result';

@Injectable({
  providedIn: 'root'
})
export class MovieListScrollService {

  constructor() {
  }

  calculateMedianByRating(movies: Array<Movie>): number {
    movies.sort((a, b) => b.rating - a.rating);
    if (movies.length % 2 !== 0) {
      return movies[Math.floor(movies.length / 2)].rating;
    } else {
      return (movies[movies.length / 2].rating + movies[(movies.length / 2) - 1].rating) / 2;
    }
  }

  hasMoreElements(currentMovieSearchResultData: Array<Movie>, totalElements: number) {
    return !(currentMovieSearchResultData && currentMovieSearchResultData.length >= totalElements);
  }

  updateResultData(movieSearchResult: MovieSearchResult, currentMovieSearchResultData: Array<Movie>): Array<Movie> {
    if (!movieSearchResult.metadata.offset) {
      currentMovieSearchResultData = movieSearchResult.data;
    } else {
      currentMovieSearchResultData = [...currentMovieSearchResultData, ...movieSearchResult.data];
    }
    return currentMovieSearchResultData;
  }

}
