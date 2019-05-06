import {Component, Input} from '@angular/core';
import {Movie} from '@app/movie/model/movie';

@Component({
  selector: 'mms-movie-item',
  template: '<div>Movie item component mock</div>',
  styleUrls: ['./movie-item.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class MovieItemComponentMock {

  @Input()
  movie: Movie;

  @Input()
  medianRate: number;


  constructor() { }
}
