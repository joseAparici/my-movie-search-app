import {MovieImp} from '@app/movie/model/movie.imp';
import {JsonObject, JsonProperty} from 'json2typescript';
import {Movie} from '@app/movie/model/movie';
import {MovieSearchResultMetadata} from '@app/movie-list/model/movie-search-result-metadata';
import {MovieSearchResultMetadataImp} from '@app/movie-list/model/movie-search-result-metadata.imp';
import {MovieSearchResult} from '@app/movie-list/model/movie-search-result';

@JsonObject
export class MovieSearchResultImp implements MovieSearchResult {

  @JsonProperty('metadata', MovieSearchResultMetadataImp)
  private _metadata: MovieSearchResultMetadata = undefined;

  @JsonProperty('data', [MovieImp])
  private _data: Array<Movie> = [];

  get metadata(): MovieSearchResultMetadata {
    return this._metadata;
  }

  set metadata(value: MovieSearchResultMetadata) {
    this._metadata = value;
  }

  get data(): Array<Movie> {
    return this._data;
  }

  set data(value: Array<Movie>) {
    this._data = value;
  }
}
