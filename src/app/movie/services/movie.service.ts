import {Injectable} from '@angular/core';
import {Genre} from '@app/movie/model/genre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  generateGenresCommaList(genres: Array<Genre>) {
    return genres.map((genre) => genre.name).toString();
  }
}
