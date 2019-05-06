import {TestBed} from '@angular/core/testing';

import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {NotificationService} from '@app/core/notification/services/notification.service';
import {Overlay} from '@angular/cdk/overlay';
import {NotificationType} from '@app/core/notification/model/notification-type.enum';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('NotificationService', () => {
  let notificationService: NotificationService;
  let matSnackBar: MatSnackBar;
  let spies: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        NoopAnimationsModule
      ],
      providers: [
        NotificationService,
        MatSnackBar,
        Overlay
      ]
    });
  });

  beforeEach(() => {
    notificationService = TestBed.get(NotificationService);
    matSnackBar = TestBed.get(MatSnackBar);
  });

  beforeEach(() => {
    loadMocks();
    initSpies();
  });

  it('should be created', () => {
    expect(notificationService).toBeTruthy();
  });

  describe('show', () => {
    it('should call to ', () => {
      notificationService.show(mocks.notification.message, mocks.notification.type);
      expect(spies.matSnackBar.open).toHaveBeenCalledWith(mocks.notification.message, null, mocks.matSnackBarConfig);
    });
  });

  function loadMocks() {
    mocks = {
      notification: {
        message: 'message',
        type: NotificationType.SUCCESS
      },
      matSnackBarConfig: {
        duration: 2000,
        panelClass: 'style-success',
        verticalPosition: 'top'
      }
    };
  }

  function initSpies() {
    spies = {
      matSnackBar: {
        open: spyOn(matSnackBar, 'open').and.callThrough()
      }
    };
  }
});
