import { Component } from '@angular/core';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AutoUnsubscribe } from './shared/decorators/AutoUnsubscribe';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
@AutoUnsubscribe
export class AppComponent {
  title = 'mean-video-hosting-frontend';
}
