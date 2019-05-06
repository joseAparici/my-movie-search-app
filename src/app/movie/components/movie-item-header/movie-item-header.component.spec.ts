import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieItemHeaderComponent} from './movie-item-header.component';
import {GenreImp} from '@app/movie/model/genre.imp';
import {MovieServiceMock} from '@app/movie/services/movie.service.mock';
import {MovieService} from '@app/movie/services/movie.service';
import {SharedModule} from '@app/shared/shared.module';

describe('MovieItemHeaderComponent', () => {
  let component: MovieItemHeaderComponent;
  let fixture: ComponentFixture<MovieItemHeaderComponent>;
  let movieService: MovieService;
  let mocks: any;
  let spies: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ MovieItemHeaderComponent ],
      providers: [
        {provide: MovieService, useClass: MovieServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    movieService = TestBed.get(MovieService);
  });

  beforeEach(() => {
    initSpies();
    loadMocks();
  });

  it('should create', () => {
    component.genres = mocks.genres;
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  function loadMocks() {
    mocks = {
      genres: [
        new GenreImp(1, 'genreOne'),
        new GenreImp(2, 'genreTwo'),
        new GenreImp(3, 'genre three')
      ],
    };
  }

  function initSpies() {
    spies = {
      moviesService: {
        generateGenresCommaList: spyOn(movieService, 'generateGenresCommaList').and.callThrough()
      }
    };
  }
});
