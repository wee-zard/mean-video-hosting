import { SiteRouteEnums } from './../../shared/enums/SiteRouteEnums';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoleEnums } from '../../shared/enums/UserRoleEnums';
import { isUserLoggedIn } from '../../shared/helper/UserRoleHelper';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  selectedPageName: string = '';
  userRole: UserRoleEnums = UserRoleEnums.NOT_LOGGED_IN_USER;
  siteRoutes: typeof SiteRouteEnums = SiteRouteEnums;

  ngOnInit(): void {
    this.handleUserAuthentication();
  }

  private handleUserAuthentication(): void {
    // TODO: If user is not logged in
    // TODO: If user is logged into
    // TODO: If the user is a normal user/ admin user/ content creator user
    //this.isUserLoggedIn = false;
  }

  isUserLoggedIn(): boolean {
    return isUserLoggedIn(this.userRole);
  }

  getCurrentPageName(): string {
    return `APP${this.selectedPageName !== '' ? ` - ${this.selectedPageName.toUpperCase()} PAGE` : ''}`;
  }

  onMenuClick(): void {}
}
