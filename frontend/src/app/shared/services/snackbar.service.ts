import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarSeverityEnums } from '../enums/SnackbarSeverityEnums';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  open(severityClass: SnackbarSeverityEnums, message?: string | null): void {
    this.snackbar.open(message ?? '', '', {
      duration: 5000,
      horizontalPosition: 'center',
      panelClass: [severityClass],
    });
  }
}
