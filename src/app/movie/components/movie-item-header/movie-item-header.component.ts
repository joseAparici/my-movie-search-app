import {Component, Input, OnInit} from '@angular/core';
import {Genre} from 'app/movie/model/genre';
import {MovieService} from '@app/movie/services/movie.service';

@Component({
  selector: 'mms-movie-item-header',
  templateUrl: './movie-item-header.component.html',
  styleUrls: ['./movie-item-header.component.scss']
})
export class MovieItemHeaderComponent implements OnInit {

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

  genresCommaList: string;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.genresCommaList = this.movieService.generateGenresCommaList(this.genres);
  }

}
