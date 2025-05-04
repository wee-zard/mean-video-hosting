import { Component } from '@angular/core';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { AutoUnsubscribe } from './shared/decorators/AutoUnsubscribe';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
@AutoUnsubscribe
export class AppComponent {
  title = 'mean-video-hosting-frontend';
}
