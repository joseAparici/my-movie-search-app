import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieItemComponent} from './movie-item.component';
import {MovieItemHeaderComponentMock} from '@app/movie/components/movie-item-header/movie-item-header.component.mock';
import {MovieItemBodyComponentMock} from '@app/movie/components/movie-item-body/movie-item-body.component.mock';
import {MovieItemFooterComponentMock} from '@app/movie/components/movie-item-footer/movie-item-footer.component.mock';
import {MatCardModule} from '@angular/material';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         MatCardModule
      ],
      declarations: [
        MovieItemComponent,
        MovieItemHeaderComponentMock,
        MovieItemBodyComponentMock,
        MovieItemFooterComponentMock
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
