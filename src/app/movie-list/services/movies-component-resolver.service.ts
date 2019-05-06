import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Genre} from '@app/movie/model/genre';
import {Observable} from 'rxjs/index';
import {MovieListService} from '@app/movie-list/services/movie-list.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesComponentResolver implements Resolve<Array<Genre>> {

  constructor(private movieListService: MovieListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Genre>> {
    return this.movieListService.loadGenres();
  }
}
