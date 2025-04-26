import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  open(message: string, isError: boolean = false): void {
    this.snackbar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      panelClass: [isError ? 'error-snackbar' : ''],
    });
  }
}
