import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BackdropComponent } from '../../../component/backdrop/backdrop.component';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { VideoImagePathPipe } from '../../../shared/pipes/video-image-path.pipe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../shared/services/user.service';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { Subscription } from 'rxjs';
import { UserModel } from '../../../shared/models/models/UserModels';
import { VideoService } from '../../../shared/services/video.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import MessageEnums from '../../../shared/enums/MessageEnums';
import { getLastUrlChunk } from '../../../shared/helper/UrlParserHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chanel-video-delete-dialog',
  imports: [
    BackdropComponent,
    CommonModule,
    VideoImagePathPipe,
    MatButtonModule,
  ],
  templateUrl: './chanel-video-delete-dialog.component.html',
  styleUrl: './chanel-video-delete-dialog.component.scss',
})
@AutoUnsubscribe
export class ChanelVideoDeleteDialogComponent implements OnInit {
  isLoading: boolean = false;
  userModel?: UserModel;
  private userModelSubscription?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ChanelVideoDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VideoResponse,
    private userService: UserService,
    private videoService: VideoService,
    private snack: SnackbarService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userModelSubscription = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
    );
  }

  handleOnCancelClick(): void {
    this.dialogRef.close();
  }

  handleOnRemoveClick(): void {
    this.videoService
      .deleteVideoByVideoId(this.data.id)
      .then(() => this.updateChanelVideos())
      .catch(() => this.snack.on(MessageEnums.VIDEO_DELETE_ERROR));
  }

  private updateChanelVideos(): void {
    const channelOwnerId = getLastUrlChunk(this.router.url);

    this.videoService
      .getVideosUploadedByUser(channelOwnerId)
      .then((res) => {
        this.videoService.updateListOfChanelVideos(res);
        this.handleOnCancelClick();
      })
      .catch(() => this.snack.on(MessageEnums.FETCH_CHANEL_OWNER_VIDEO_ERROR));
  }
}
