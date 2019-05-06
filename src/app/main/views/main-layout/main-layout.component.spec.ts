import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderModuleMock} from '@app/header/header.module.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_MODULE_CONFIG, APP_MODULE_CONSTANTS} from '@app/app.module.config';
import {MainLayoutComponent} from '@app/main/views/main-layout/main-layout.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('MainLayoutComponent', () => {
  let fixture: ComponentFixture<MainLayoutComponent>;
  let component: MainLayoutComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderModuleMock,
        RouterTestingModule
      ],
      declarations: [ MainLayoutComponent ],
      providers: [
        {provide: APP_MODULE_CONFIG, useValue: APP_MODULE_CONSTANTS}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template', () => {
    it('should have a mms-header component', () => {
      expect(debugElement.query(By.css('mms-header'))).toBeTruthy();
    });

    it('should have a router-outlet component', () => {
      expect(debugElement.query(By.css('router-outlet'))).toBeTruthy();
    });
  });
});
