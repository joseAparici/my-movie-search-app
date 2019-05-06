import {Movie} from '@app/movie/model/movie';
import {JsonObject, JsonProperty} from 'json2typescript';
import {Genre} from '@app/movie/model/genre';
import {MovieImage} from '@app/movie/model/movie-image';
import {Cast} from '@app/movie/model/cast';
import {CastImp} from '@app/movie/model/cast.imp';
import {GenreImp} from '@app/movie/model/genre.imp';
import {MovieImageImp} from '@app/movie/model/movie-image.imp';
import {DateConverter} from '@app/core/converters/date.converter';

@JsonObject
export class MovieImp implements Movie {
  @JsonProperty('id', Number)
  private _id: number = undefined;

  @JsonProperty('title', String)
  private _title: string = undefined;

  @JsonProperty('tagline', String)
  private _tagline: string = undefined;

  @JsonProperty('overview', String)
  private _overview: string = undefined;

  @JsonProperty('popularity', Number)
  private _popularity: number = undefined;

  @JsonProperty('rating', Number)
  private _rating: number = undefined;

  @JsonProperty('ratingCount', Number)
  private _ratingCount: number = undefined;

  @JsonProperty('runtime', Number)
  private _runtime: number = undefined;

  @JsonProperty('releaseDate', DateConverter)
  private _releaseDate: Date = undefined;

  @JsonProperty('revenue', Number)
  private _revenue: number = undefined;

  @JsonProperty('budget', Number)
  private _budget: number = undefined;

  @JsonProperty('posterPath', String)
  private _posterPath: string = undefined;

  @JsonProperty('originalLanguage', String)
  private _originalLanguage: string = undefined;

  @JsonProperty('genres', [GenreImp])
  private _genres: Array<Genre> = [];

  @JsonProperty('cast', [CastImp])
  private _cast: Array<Cast> = [];

  @JsonProperty('poster', MovieImageImp)
  private _poster: MovieImage = undefined;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get tagline(): string {
    return this._tagline;
  }

  set tagline(value: string) {
    this._tagline = value;
  }

  get overview(): string {
    return this._overview;
  }

  set overview(value: string) {
    this._overview = value;
  }

  get popularity(): number {
    return this._popularity;
  }

  set popularity(value: number) {
    this._popularity = value;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  get ratingCount(): number {
    return this._ratingCount;
  }

  set ratingCount(value: number) {
    this._ratingCount = value;
  }

  get runtime(): number {
    return this._runtime;
  }

  set runtime(value: number) {
    this._runtime = value;
  }

  get releaseDate(): Date {
    return this._releaseDate;
  }

  set releaseDate(value: Date) {
    this._releaseDate = value;
  }

  get revenue(): number {
    return this._revenue;
  }

  set revenue(value: number) {
    this._revenue = value;
  }

  get budget(): number {
    return this._budget;
  }

  set budget(value: number) {
    this._budget = value;
  }

  get posterPath(): string {
    return this._posterPath;
  }

  set posterPath(value: string) {
    this._posterPath = value;
  }

  get originalLanguage(): string {
    return this._originalLanguage;
  }

  set originalLanguage(value: string) {
    this._originalLanguage = value;
  }

  get genres(): Array<Genre> {
    return this._genres;
  }

  set genres(value: Array<Genre>) {
    this._genres = value;
  }

  get cast(): Array<Cast> {
    return this._cast;
  }

  set cast(value: Array<Cast>) {
    this._cast = value;
  }

  get poster(): MovieImage {
    return this._poster;
  }

  set poster(value: MovieImage) {
    this._poster = value;
  }
}
