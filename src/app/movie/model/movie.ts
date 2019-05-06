import {Genre} from '@app/movie/model/genre';
import {Cast} from '@app/movie/model/cast';
import {MovieImage} from '@app/movie/model/movie-image';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  popularity: number;
  rating: number;
  ratingCount: number;
  runtime: number;
  releaseDate: Date;
  revenue: number;
  budget: number;
  posterPath: string;
  originalLanguage: string;
  genres: Array<Genre>;
  cast: Array<Cast>;
  poster: MovieImage;
}
