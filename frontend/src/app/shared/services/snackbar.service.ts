import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SeverityEnums } from '../enums/SeverityEnums';
import MessageEnums from '../enums/MessageEnums';
import { listOfMessages } from '../helper/SnackbarHelper';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  private getMatSnackbarConfigs(severity: SeverityEnums): MatSnackBarConfig {
    return {
      duration: 5000,
      horizontalPosition: 'center',
      panelClass: [severity],
    };
  }

  open(severity: SeverityEnums, message?: string | null): void {
    this.snackbar.open(message ?? '', '', this.getMatSnackbarConfigs(severity));
  }

  on(message: MessageEnums) {
    const severity = listOfMessages[message].call(() => null);
    this.snackbar.open(message, '', this.getMatSnackbarConfigs(severity));
  }
}
