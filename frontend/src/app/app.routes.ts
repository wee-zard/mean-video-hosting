import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'chanel',
    loadComponent: () =>
      import('./view/chanel/chanel.component').then((c) => c.ChanelComponent),
  },
  {
    path: 'video',
    loadComponent: () =>
      import('./view/video/video.component').then((c) => c.VideoComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./view/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./view/registration/registration.component').then(
        (c) => c.RegistrationComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./view/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./view/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
