import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatToolbarModule} from '@angular/material';
import {HeaderComponent} from '@app/header/components/header/header.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template', () => {
    it('should have a mat-toolbar component', () => {
      expect(debugElement.query(By.css('mat-toolbar'))).toBeTruthy();
    });

    it('should have a span tag', () => {
      expect(debugElement.query(By.css('span'))).toBeTruthy();
    });

    it('should have animg tag', () => {
      expect(debugElement.query(By.css('img'))).toBeTruthy();
    });
  });
});
