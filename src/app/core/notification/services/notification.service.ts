import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {NotificationType} from '@app/core/notification/model/notification-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private zone: NgZone, private readonly snackBar: MatSnackBar) {
  }

  show(message: string, notificationType: NotificationType) {
    const config: MatSnackBarConfig = {
      duration: 2000,
      panelClass: `style-${notificationType}`,
      verticalPosition: 'top'
    };

    this.zone.run(() => this.snackBar.open(message, null, config));
  }
}
