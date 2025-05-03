import { Routes } from '@angular/router';
import { SiteRouteEnums } from './shared/enums/SiteRouteEnums';
import { VideoExistGuard } from './shared/guards/video-exist.guard';
import { ChanelExistGuard } from './shared/guards/chanel-exist.guard';

export const routes: Routes = [
  {
    path: `${SiteRouteEnums.CHANEL_PAGE}/:user_id`,
    canActivate: [ChanelExistGuard],
    loadComponent: () =>
      import('./view/chanel/chanel.component').then((c) => c.ChanelComponent),
  },
  {
    path: `${SiteRouteEnums.VIDEO_PAGE}/:video_id`,
    canActivate: [VideoExistGuard],
    loadComponent: () =>
      import('./view/video/video.component').then((c) => c.VideoComponent),
  },
  {
    path: SiteRouteEnums.HOME_PAGE,
    loadComponent: () =>
      import('./view/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: SiteRouteEnums.REGISTRATION_PAGE,
    loadComponent: () =>
      import('./view/registration/registration.component').then(
        (c) => c.RegistrationComponent,
      ),
  },
  {
    path: SiteRouteEnums.LOGIN,
    loadComponent: () =>
      import('./view/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: SiteRouteEnums.NOT_FOUND,
    loadComponent: () =>
      import('./view/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
  {
    path: '',
    redirectTo: SiteRouteEnums.HOME_PAGE,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: SiteRouteEnums.NOT_FOUND,
  },
];
