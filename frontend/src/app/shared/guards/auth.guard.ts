import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SiteRouteEnums } from '../enums/SiteRouteEnums';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const r = inject(Router);
  return inject(AuthService)
    .checkAuth()
    .then((baseResponse) => {
      if (!baseResponse) {
        r.navigateByUrl(`/${SiteRouteEnums.LOGIN}`);
        return false;
      }

      return true;
    })
    .catch((error) => {
      console.log(error);
      r.navigateByUrl(`/${SiteRouteEnums.LOGIN}`);
      return false;
    });
};
