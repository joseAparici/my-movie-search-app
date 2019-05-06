import {Cast} from '@app/movie/model/cast';
import {JsonObject, JsonProperty} from 'json2typescript';
import {MovieImage} from '@app/movie/model/movie-image';
import {MovieImageImp} from '@app/movie/model/movie-image.imp';

@JsonObject
export class CastImp implements Cast {

  @JsonProperty('id', Number)
  private _id: number = undefined;

  @JsonProperty('gender', Number)
  private _gender: number = undefined;

  @JsonProperty('name', String)
  private _name: string = undefined;

  @JsonProperty('character', String)
  private _character: string = undefined;

  @JsonProperty('profilePath', String)
  private _profilePath: string = undefined;

  @JsonProperty('profileImage', MovieImageImp)
  private _profileImage: MovieImage = undefined;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get gender(): number {
    return this._gender;
  }

  set gender(value: number) {
    this._gender = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get character(): string {
    return this._character;
  }

  set character(value: string) {
    this._character = value;
  }

  get profilePath(): string {
    return this._profilePath;
  }

  set profilePath(value: string) {
    this._profilePath = value;
  }

  get profileImage(): MovieImage {
    return this._profileImage;
  }

  set profileImage(value: MovieImage) {
    this._profileImage = value;
  }
}
