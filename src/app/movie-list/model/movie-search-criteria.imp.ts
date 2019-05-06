import {MovieSearchCriteria} from '@app/movie-list/model/movie-search-criteria';

export class MovieSearchCriteriaImp implements MovieSearchCriteria {

  genre: string;
  rating: number;
  offset: number;
  limit: number;

  constructor(genre: string, rating?: number, offset?: number, limit?: number) {
    this.genre = genre;
    this.rating = rating;
    this.offset = offset;
    this.limit = limit;
  }
}
