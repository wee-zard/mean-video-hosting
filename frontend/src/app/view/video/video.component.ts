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
import { Subscription } from 'rxjs';
import { getLastUrlChunk } from '../../shared/helper/UrlParserHelper';
import { SnackbarService } from '../../shared/services/snackbar.service';
import MessageEnums from '../../shared/enums/MessageEnums';
import { UserModel } from '../../shared/models/models/UserModels';
import { UserService } from '../../shared/services/user.service';

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
  userModel?: UserModel;
  listOfRandomVideos: VideoResponse[] = [];
  private subs1?: Subscription;
  private subs2?: Subscription;
  private subs3?: Subscription;

  constructor(
    private videoService: VideoService,
    private commentService: CommentService,
    private userService: UserService,
    private router: Router,
    private snack: SnackbarService,
  ) {}

  ngOnInit(): void {
    const videoId = getLastUrlChunk(this.router.url);

    this.videoService
      .increaseViewCount(videoId)
      .catch(() => this.snack.on(MessageEnums.VIDEO_VIEW_INCREMENT));

    this.subs1 = this.videoService.videoReload$.subscribe(() =>
      this.initVideoWebsite(),
    );

    this.subs2 = this.videoService.selectedVideo$.subscribe(
      (data) => (this.video = data),
    );

    this.subs3 = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
    );
  }

  initVideoWebsite(): void {
    const videoId = getLastUrlChunk(this.router.url);

    this.videoService
      .getOneVideoById(videoId)
      .then((videoResponse) => {
        this.videoService.updateSelectedVideo(videoResponse);
        this.commentService.fetchLatestComments(videoResponse, this.userModel);
      })
      .catch(() => {
        this.snack.on(MessageEnums.GET_VIDEO_BY_ID);
        this.videoService.updateSelectedVideo();
      });

    this.videoService
      .getRandomVideosExceptVideoId(videoId)
      .then((res) => (this.listOfRandomVideos = res))
      .catch(() => {
        this.snack.on(MessageEnums.GET_RANDOM_VIDEOS);
        this.listOfRandomVideos = [];
      });
  }

  handleUploaderOnClick(): void {
    if (!this.video) {
      this.snack.on(MessageEnums.VIDEO_NOT_PROVIDED);
      return;
    }

    this.router.navigateByUrl(
      `/${SiteRouteEnums.CHANEL_PAGE}/${this.video.upload.userId}`,
    );
  }
}
