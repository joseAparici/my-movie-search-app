import {MovieSearchResultMetadata} from 'app/movie-list/model/movie-search-result-metadata';
import {Movie} from 'app/movie/model/movie';

export interface MovieSearchResult {
  metadata: MovieSearchResultMetadata;
  data: Array<Movie>;
}
