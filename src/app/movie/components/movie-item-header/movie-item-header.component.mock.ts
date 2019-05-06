import {Component, Input} from '@angular/core';
import {Genre} from '@app/movie/model/genre';

@Component({
  selector: 'mms-movie-item-header',
  template: '<div>Movie item header component mock</div>',
  styleUrls: ['./movie-item-header.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class MovieItemHeaderComponentMock {

  @Input()
  title: string;

  @Input()
  rating: number;

  @Input()
  releaseDate: Date;

  @Input()
  genres: Array<Genre>;

  @Input()
  medianRate: number;

  constructor() { }
}
