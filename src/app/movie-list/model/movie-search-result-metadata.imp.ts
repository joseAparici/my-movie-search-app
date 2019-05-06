import {JsonObject, JsonProperty} from 'json2typescript';
import {MovieSearchResultMetadata} from 'app/movie-list/model/movie-search-result-metadata';

@JsonObject
export class MovieSearchResultMetadataImp implements MovieSearchResultMetadata {

  @JsonProperty('offset', Number)
  private _offset: number = undefined;

  @JsonProperty('limit', Number)
  private _limit: number = undefined;

  @JsonProperty('total', Number)
  private _total: number = undefined;

  get offset(): number {
    return this._offset;
  }

  set offset(value: number) {
    this._offset = value;
  }

  get limit(): number {
    return this._limit;
  }

  set limit(value: number) {
    this._limit = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
}
