import { Component } from '@angular/core';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidenavComponent } from "./component/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mean-video-hosting-frontend';
}
