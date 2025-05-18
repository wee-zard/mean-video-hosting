import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../shared/decorators/AutoUnsubscribe';
import { UserModel, UserRoleEnum } from '../../shared/models/models/UserModels';
import { UserService } from '../../shared/services/user.service';
import { VideoResponse } from '../../shared/models/response/VideoResponse';
import { getLastUrlChunk } from '../../shared/helper/UrlParserHelper';
import { VideoService } from '../../shared/services/video.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { ChanelHeaderComponent } from './chanel-header/chanel-header.component';
import { ChanelVideosComponent } from './chanel-videos/chanel-videos.component';
import { ChanelVideoManagementComponent } from './chanel-video-management/chanel-video-management.component';
import MessageEnums from '../../shared/enums/MessageEnums';

@Component({
  selector: 'app-chanel',
  imports: [
    MatTabsModule,
    ChanelHeaderComponent,
    CommonModule,
    ChanelVideosComponent,
    ChanelVideoManagementComponent,
  ],
  templateUrl: './chanel.component.html',
  styleUrl: './chanel.component.scss',
})
@AutoUnsubscribe
export class ChanelComponent implements OnInit {
  channelOwnerId?: string;
  user?: UserModel;
  uploadedVideos: VideoResponse[] = [];
  private subs3?: Subscription;
  private subs2?: Subscription;
  private subs1?: Subscription;

  constructor(
    private userService: UserService,
    private videoService: VideoService,
    private router: Router,
    private snack: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.subs2 = this.userService.userModel$.subscribe(
      (data) => (this.user = data),
    );

    this.subs1 = this.videoService.listOfChanelVideos$.subscribe(
      (data) => (this.uploadedVideos = data),
    );

    this.subs3 = this.videoService.videoReload$.subscribe(() => {
      this.channelOwnerId = getLastUrlChunk(this.router.url);

      this.videoService
        .getVideosUploadedByUser(this.channelOwnerId)
        .then((res) => this.videoService.updateListOfChanelVideos(res))
        .catch(() =>
          this.snack.on(MessageEnums.FETCH_CHANEL_OWNER_VIDEO_ERROR),
        );
    });
  }

  isVideoStatisticsAreDisplayed(): boolean {
    return (
      this.user?.userRole === UserRoleEnum.ADMIN_USER ||
      this.isBrowsingUserTheChanelOwner()
    );
  }

  isBrowsingUserTheChanelOwner(): boolean {
    return this.channelOwnerId === this.user?.id;
  }
}
