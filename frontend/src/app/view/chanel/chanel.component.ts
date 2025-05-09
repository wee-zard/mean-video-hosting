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
import { SeverityEnums } from '../../shared/enums/SeverityEnums';
import { ChanelHeaderComponent } from './chanel-header/chanel-header.component';
import { ChanelVideosComponent } from './chanel-videos/chanel-videos.component';
import { ChanelVideoStatisticsComponent } from './chanel-video-statistics/chanel-video-statistics.component';
import { ChanelVideoUploadComponent } from './chanel-video-upload/chanel-video-upload.component';

@Component({
  selector: 'app-chanel',
  imports: [
    MatTabsModule,
    ChanelHeaderComponent,
    CommonModule,
    ChanelVideosComponent,
    ChanelVideoStatisticsComponent,
    ChanelVideoUploadComponent,
  ],
  templateUrl: './chanel.component.html',
  styleUrl: './chanel.component.scss',
})
@AutoUnsubscribe
export class ChanelComponent implements OnInit {
  channelOwnerId?: string;
  user?: UserModel;
  uploadedVideos: VideoResponse[] = [];
  private userSubs?: Subscription;
  private listOfChanelVideosSubs?: Subscription;

  constructor(
    private userService: UserService,
    private videoService: VideoService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.channelOwnerId = getLastUrlChunk(this.router.url);

    this.userSubs = this.userService.userModel$.subscribe(
      (data) => (this.user = data),
    );

    this.listOfChanelVideosSubs =
      this.videoService.listOfChanelVideos$.subscribe(
        (data) => (this.uploadedVideos = data),
      );

    this.videoService
      .getVideosUploadedByUser(this.channelOwnerId)
      .then((res) => this.videoService.updateListOfChanelVideos(res))
      .catch(() => {
        this.snackbarService.open(
          SeverityEnums.ERROR,
          'Error while loading the uploaded videos of the chanel owner!',
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
