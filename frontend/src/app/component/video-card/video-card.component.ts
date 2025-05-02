import { Component, Input } from '@angular/core';
import { VideoResponse } from '../../shared/models/response/VideoResponse';
import { ViewCountFormatterPipe } from '../../shared/pipes/view-count-formatter.pipe';
import { VideoImagePathPipe } from '../../shared/pipes/video-image-path.pipe';
import { UploadTimeFormatterPipe } from '../../shared/pipes/upload-time-formatter.pipe';
import { Router } from '@angular/router';
import { SiteRouteEnums } from '../../shared/enums/SiteRouteEnums';

@Component({
  selector: 'app-video-card',
  imports: [
    ViewCountFormatterPipe,
    VideoImagePathPipe,
    UploadTimeFormatterPipe,
  ],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  @Input() video!: VideoResponse;

  constructor(private router: Router) {}

  handleOnClick(): void {
    this.router.navigateByUrl(`/${SiteRouteEnums.VIDEO_PAGE}/${this.video.id}`);
  }
}
