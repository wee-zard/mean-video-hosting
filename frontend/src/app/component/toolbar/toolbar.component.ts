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
import { SnackbarSeverityEnums } from '../../shared/enums/SnackbarSeverityEnums';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, CommonModule, RouterModule],
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
  ) {}

  ngOnInit(): void {
    this.userModelSubscription = this.userService.userModel$.subscribe(
      (user) => {
        this.authenticatedUser = user;
        this.handleUserAuthentication();
      },
    );
  }

  private handleUserAuthentication(): void {
    this.authService
      .checkAuth()
      .then((res) => (this.isUserLoggedIn = res))
      .catch(() => (this.isUserLoggedIn = false));
  }

  getCurrentPageName(): string {
    return `APP${this.selectedPageName !== '' ? ` - ${this.selectedPageName.toUpperCase()} PAGE` : ''}`;
  }

  isRoleAdmin(): boolean {
    return (
      this.authenticatedUser?.userRole === UserRoleEnum.CONTENT_CREATOR_USER
    );
  }

  onLogoutClick(): void {
    this.authService
      .logout()
      .then((res) => {
        this.snackbarService.open(SnackbarSeverityEnums.SUCCESS, res.message);
        this.userService.updateUserModel();
        //this.router.navigateByUrl(`/${SiteRouteEnums.LOGIN}`);
      })
      .catch((error) => {
        this.snackbarService.open(
          SnackbarSeverityEnums.ERROR,
          error?.error?.error ?? error.message,
        );
      });
  }
}
