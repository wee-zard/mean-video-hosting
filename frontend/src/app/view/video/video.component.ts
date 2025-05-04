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
import { VideoCommentsComponent } from './video-comments/video-comments.component';
import { VideoCardComponent } from '../../component/video-card/video-card.component';
import { CommentService } from '../../shared/services/comment.service';
import { CommentResponse } from '../../shared/models/response/CommentResponse';
import { Subscription } from 'rxjs';
import { getLastUrlChunk } from '../../shared/helper/UrlParserHelper';

@Component({
  selector: 'app-video',
  imports: [
    CommonModule,
    SanitizeResourceUrlPipe,
    LikeDislikeToggleComponent,
    VideoDescriptionComponent,
    VideoCommentsComponent,
    VideoCardComponent,
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
@AutoUnsubscribe
export class VideoComponent implements OnInit {
  video?: VideoResponse;
  listOfRandomVideos: VideoResponse[] = [];
  private reloadSubscription?: Subscription;

  constructor(
    private videoService: VideoService,
    private commentService: CommentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.reloadSubscription = this.videoService.videoReload$.subscribe(() =>
      this.initVideoWebsite(),
    );
  }

  initVideoWebsite(): void {
    const videoId = getLastUrlChunk(this.router.url);

    this.videoService
      .getOneVideoById(videoId)
      .then((videoResponse) => {
        this.video = videoResponse;
        this.videoService.updateSelectedVideo(videoResponse);
      })
      .catch(() => this.videoService.updateSelectedVideo());

    this.videoService
      .getRandomVideosExceptVideoId(videoId)
      .then((res) => (this.listOfRandomVideos = res));

    this.commentService
      .getCommentsByVideoId(videoId)
      .then((res) => this.commentService.updateListOfComments(res))
      .catch(() => this.commentService.updateListOfComments([]));
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
