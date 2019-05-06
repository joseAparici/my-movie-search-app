import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieItemBodyComponent} from './movie-item-body.component';
import {MatCardModule} from '@angular/material';

describe('MovieItemBodyComponent', () => {
  let component: MovieItemBodyComponent;
  let fixture: ComponentFixture<MovieItemBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [ MovieItemBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
