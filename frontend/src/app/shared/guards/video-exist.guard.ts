import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SiteRouteEnums } from '../enums/SiteRouteEnums';
import { VideoService } from '../services/video.service';

export const VideoGuardExistGuard: CanActivateFn = (route, state) => {
  const r = inject(Router);

  const videoId = route?.params['video_id'];

  if (!videoId) {
    r.navigateByUrl(`/${SiteRouteEnums.NOT_FOUND}`);
    return false;
  }

  return inject(VideoService)
    .isVideoExists(videoId)
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
