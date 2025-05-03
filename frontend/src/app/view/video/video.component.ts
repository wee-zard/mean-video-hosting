import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideoResponse } from '../../shared/models/response/VideoResponse';
import { VideoService } from '../../shared/services/video.service';
import { SanitizeResourceUrlPipe } from '../../shared/pipes/sanitize-resource-url.pipe';
import { SiteRouteEnums } from '../../shared/enums/SiteRouteEnums';
import { LikeDislikeToggleComponent } from './like-dislike-toggle/like-dislike-toggle.component';
import { AutoUnsubscribe } from '../../shared/decorators/AutoUnsubscribe';
import { VideoDescriptionComponent } from './video-description/video-description.component';

@Component({
  selector: 'app-video',
  imports: [
    CommonModule,
    SanitizeResourceUrlPipe,
    LikeDislikeToggleComponent,
    VideoDescriptionComponent,
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
@AutoUnsubscribe
export class VideoComponent implements OnInit {
  video?: VideoResponse;

  constructor(
    private videoService: VideoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const splittedUrl = this.router.url.split('/');
    const videoId = splittedUrl[splittedUrl.length - 1];

    this.videoService.getOneVideoById(videoId).then((videoResponse) => {
      this.video = videoResponse;
      this.videoService.updateSelectedVideo(videoResponse);
    });
  }

  handleUploaderOnClick(): void {
    if (!this.video) {
      return;
    }

    this.router.navigateByUrl(
      `/${SiteRouteEnums.CHANEL_PAGE}/${this.video.upload.userId}`,
    );
  }
}
