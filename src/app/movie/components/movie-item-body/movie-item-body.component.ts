import {Component, Input} from '@angular/core';

@Component({
  selector: 'mms-movie-item-body',
  templateUrl: './movie-item-body.component.html',
  styleUrls: ['./movie-item-body.component.scss']
})
export class MovieItemBodyComponent {

  @Input()
  overview: string;

  constructor() { }
}
