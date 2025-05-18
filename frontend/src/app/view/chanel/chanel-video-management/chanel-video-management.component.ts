import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { UserModel } from '../../../shared/models/models/UserModels';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { VideoService } from '../../../shared/services/video.service';
import { getLastUrlChunk } from '../../../shared/helper/UrlParserHelper';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { VideoImagePathPipe } from '../../../shared/pipes/video-image-path.pipe';
import { SiteRouteEnums } from '../../../shared/enums/SiteRouteEnums';
import { MatDialog } from '@angular/material/dialog';
import { ChanelVideoDeleteDialogComponent } from '../chanel-video-delete-dialog/chanel-video-delete-dialog.component';
import {
  videoModificationMatDialogConfigs,
  videoUploadMatDialogConfigs,
} from '../../../shared/helper/DialogHelper';
import { ViewCountFormatterPipe } from '../../../shared/pipes/view-count-formatter.pipe';
import { UploadTimeFormatterPipe } from '../../../shared/pipes/upload-time-formatter.pipe';
import { LikeCountFormatterPipe } from '../../../shared/pipes/like-count-formatter.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChanelVideoEditDialogComponent } from '../chanel-video-edit-dialog/chanel-video-edit-dialog.component';
import { ChanelVideoUploadDialogComponent } from '../chanel-video-upload-dialog/chanel-video-upload-dialog.component';

@Component({
  selector: 'app-chanel-video-management',
  imports: [
    MatTableModule,
    VideoImagePathPipe,
    MatButtonModule,
    MatIconModule,
    ViewCountFormatterPipe,
    UploadTimeFormatterPipe,
    LikeCountFormatterPipe,
    MatProgressSpinnerModule,
  ],
  templateUrl: './chanel-video-management.component.html',
  styleUrl: './chanel-video-management.component.scss',
})
@AutoUnsubscribe
export class ChanelVideoManagementComponent implements OnInit {
  channelOwnerId?: string;
  user?: UserModel;
  displayedColumns = [
    'videoUrlPath',
    'title',
    'description',
    'statistics',
    'action',
  ];
  dataSource = new MatTableDataSource<VideoResponse>([]);
  private subs1?: Subscription;

  constructor(
    private videoService: VideoService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.channelOwnerId = getLastUrlChunk(this.router.url);

    this.subs1 = this.videoService.listOfChanelVideos$.subscribe((data) => {
      this.dataSource = new MatTableDataSource<VideoResponse>(data);
    });
  }

  getProgressSpinnerValue(video: VideoResponse): number {
    return Math.floor(
      (video.rating.numberOfLikes /
        (video.rating.numberOfLikes + video.rating.numberOsfDislikes)) *
        100,
    );
  }

  handleOnVideoClick(videoId: string): void {
    this.router.navigateByUrl(`/${SiteRouteEnums.VIDEO_PAGE}/${videoId}`);
  }

  handleOnDeleteClick(video: VideoResponse): void {
    this.dialog.open(
      ChanelVideoDeleteDialogComponent,
      videoModificationMatDialogConfigs(video),
    );
  }

  handleOnEditClick(video: VideoResponse): void {
    this.dialog.open(
      ChanelVideoEditDialogComponent,
      videoModificationMatDialogConfigs(video, 700),
    );
  }

  handleOnUploadVideoClick(): void {
    this.dialog.open(
      ChanelVideoUploadDialogComponent,
      videoUploadMatDialogConfigs(),
    );
  }
}
