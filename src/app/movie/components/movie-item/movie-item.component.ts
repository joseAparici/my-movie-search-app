import {Component, Input} from '@angular/core';
import {Movie} from 'app/movie/model/movie';

@Component({
  selector: 'mms-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input()
  movie: Movie;

  @Input()
  medianRate: number;

  constructor() { }

}
