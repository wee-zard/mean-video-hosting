import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SettingService } from '../../shared/services/setting.service';
import { AutoUnsubscribe } from '../../shared/decorators/AutoUnsubscribe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  imports: [MatButtonModule, MatSidenavModule, RouterOutlet, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
@AutoUnsubscribe
export class SidenavComponent implements OnInit {
  showFiller = false;
  isSidenavOpen: boolean = false;
  private isSidenavOpenSubscription?: Subscription;

  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.isSidenavOpenSubscription =
      this.settingService.isSidenavOpen$.subscribe(
        (isSidenavOpen) => (this.isSidenavOpen = isSidenavOpen),
      );
  }
}
