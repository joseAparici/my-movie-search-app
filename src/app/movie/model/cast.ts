import {MovieImage} from '@app/movie/model/movie-image';

export interface Cast {
  id: number;
  gender: number;
  name: string;
  character: string;
  profilePath: string;
  profileImage: MovieImage;
}
