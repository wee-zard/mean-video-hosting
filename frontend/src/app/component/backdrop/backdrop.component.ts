import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-backdrop',
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './backdrop.component.html',
  styleUrl: './backdrop.component.scss',
})
export class BackdropComponent {
  @Input() isLoading?: boolean;
}
