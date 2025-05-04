import { SiteRouteEnums } from './../../shared/enums/SiteRouteEnums';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AutoUnsubscribe } from '../../shared/decorators/AutoUnsubscribe';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { UserModel, UserRoleEnum } from '../../shared/models/models/UserModels';
import { AuthService } from '../../shared/services/auth.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { SeverityEnums } from '../../shared/enums/SeverityEnums';
import { MatButtonModule } from '@angular/material/button';
import { SettingService } from '../../shared/services/setting.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StorageKeyEnum } from '../../shared/enums/StorageKeyEnums';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    SearchbarComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
@AutoUnsubscribe
export class ToolbarComponent implements OnInit {
  selectedPageName: string = '';
  siteRoutes: typeof SiteRouteEnums = SiteRouteEnums;
  authenticatedUser?: UserModel;
  isUserLoggedIn: boolean = false;
  private userModelSubscription?: Subscription;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router,
    private settingService: SettingService,
  ) {}

  ngOnInit(): void {
    this.userModelSubscription = this.userService.userModel$.subscribe(
      (user) => {
        if (!user) {
          return;
        }

        this.authService
          .checkAuth()
          .then((res) => (this.isUserLoggedIn = res))
          .catch(() => {
            this.isUserLoggedIn = false;
            this.userService.updateUserModel();
            localStorage.removeItem(StorageKeyEnum.AUTHENTICATED_USER);
          });
      },
    );

    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const element = localStorage.getItem(StorageKeyEnum.AUTHENTICATED_USER);

    if (!element) {
      return;
    }

    const user: UserModel = JSON.parse(element);
    this.userService.updateUserModel(user);
  }

  isRoleAdmin(): boolean {
    return (
      this.authenticatedUser?.userRole === UserRoleEnum.CONTENT_CREATOR_USER
    );
  }

  onHeadlineIconClick(): void {
    this.settingService.updateToggleSidenav();
  }

  onLogoutClick(): void {
    this.authService
      .logout()
      .then((res) => {
        this.snackbarService.open(SeverityEnums.SUCCESS, res.message);
        this.userService.updateUserModel();
        this.router.navigateByUrl(`/${SiteRouteEnums.LOGIN}`);
      })
      .catch((error) => {
        this.snackbarService.open(
          SeverityEnums.ERROR,
          error?.error?.error ?? error.message,
        );
      });
  }
}
