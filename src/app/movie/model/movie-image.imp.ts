import {MovieImage} from '@app/movie/model/movie-image';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class MovieImageImp implements MovieImage {

  @JsonProperty('fullPath', String)
  private _fullPath: string = undefined;

  @JsonProperty('size', String)
  private _size: string = undefined;

  get fullPath(): string {
    return this._fullPath;
  }

  set fullPath(value: string) {
    this._fullPath = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }
}
