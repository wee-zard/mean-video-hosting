import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { UploadService } from '../../../shared/services/upload.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { SeverityEnums } from '../../../shared/enums/SeverityEnums';
import { VideoUploadRequest } from '../../../shared/models/request/VideoUploadRequest';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { UserService } from '../../../shared/services/user.service';
import { UserModel } from '../../../shared/models/models/UserModels';
import { BackdropComponent } from '../../../component/backdrop/backdrop.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chanel-video-upload',
  imports: [MatButtonModule, MatIconModule, BackdropComponent, CommonModule],
  templateUrl: './chanel-video-upload.component.html',
  styleUrl: './chanel-video-upload.component.scss',
})
@AutoUnsubscribe
export class ChanelVideoUploadComponent implements OnInit {
  fileName = '';
  userModel?: UserModel;
  requiredFileType = 'video/mp4';
  isLoading: boolean = false;
  private userModelSubscription?: Subscription;

  constructor(
    private userService: UserService,
    private uploadService: UploadService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.userModelSubscription = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
    );
  }

  onFileSelected(event: any) {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    const file: File = event.target.files[0];

    if (!file) {
      this.isLoading = false;
      return;
    }

    this.fileName = file.name;
    const videoBlob = new Blob([file], { type: 'video/*' });
    this.uploadToExpressServer(videoBlob);
  }

  private async uploadToExpressServer(videoBlob: Blob): Promise<void> {
    try {
      const res = await this.uploadService.expressServer(videoBlob);
      this.uploadToYoutubeServer(res.filename);
    } catch (error) {
      this.snackbarService.open(
        SeverityEnums.ERROR,
        'Error while uploading the video to the express server!',
      );
      this.isLoading = false;
    }
  }

  private async uploadToYoutubeServer(videoPath: string): Promise<void> {
    if (!this.userModel) {
      this.isLoading = false;
      return;
    }

    try {
      // TODO: The video request is not built properly. Hardcoded fields are present.
      const video: VideoUploadRequest = {
        videoPath: videoPath,
        description:
          'My very first video upload using googleapis and youtube_v3 api',
        title: 'Demo video upload to youtube',
        upload: {
          userId: this.userModel.id,
          userName: this.userModel.username,
          userImagePath: this.userModel.profilePicturePath ?? '',
        },
        tags: [],
        categories: [],
      };

      await this.uploadService.youtubeServer(video);

      this.snackbarService.open(
        SeverityEnums.SUCCESS,
        'Video has been successfully uploaded to the server!',
      );

      // TODO: reload page.

      this.isLoading = false;
    } catch (error) {
      this.snackbarService.open(
        SeverityEnums.ERROR,
        'Error while uploading the video to the youtube server!',
      );
      this.isLoading = false;
    }
  }
}
