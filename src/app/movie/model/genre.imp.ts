import {Genre} from '@app/movie/model/genre';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class GenreImp implements Genre {

  @JsonProperty('id', Number)
  private _id: number;

  @JsonProperty('name', String)
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
