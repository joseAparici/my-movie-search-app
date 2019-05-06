import {Component, Input} from '@angular/core';

@Component({
  selector: 'mms-movie-item-body',
  template: '<div>Movie item body component mock</div>',
  styleUrls: ['./movie-item-body.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class MovieItemBodyComponentMock {

  @Input()
  overview: string;

  constructor() { }
}
