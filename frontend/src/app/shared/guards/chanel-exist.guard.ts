import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SiteRouteEnums } from '../enums/SiteRouteEnums';
import { UserService } from '../services/user.service';

export const ChanelExistGuard: CanActivateFn = (route, state) => {
  const r = inject(Router);

  const userId = route?.params['user_id'];

  if (!userId) {
    r.navigateByUrl(`/${SiteRouteEnums.NOT_FOUND}`);
    return false;
  }

  return inject(UserService)
    .isContentCreatorExists(userId)
    .then((result) => {
      if (result) {
        return true;
      } else {
        r.navigateByUrl(`/${SiteRouteEnums.NOT_FOUND}`);
        return false;
      }
    })
    .catch(() => {
      r.navigateByUrl(`/${SiteRouteEnums.NOT_FOUND}`);
      return false;
    });
};
