import { Component, Inject, Input, OnInit } from '@angular/core';
import { BackdropComponent } from '../../../component/backdrop/backdrop.component';
import { CommonModule } from '@angular/common';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { VideoImagePathPipe } from '../../../shared/pipes/video-image-path.pipe';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../shared/services/user.service';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { Subscription } from 'rxjs';
import { UserModel } from '../../../shared/models/models/UserModels';
import { MatButtonModule } from '@angular/material/button';

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
    private router: Router,
    public dialogRef: MatDialogRef<ChanelVideoDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VideoResponse,
    private userService: UserService,
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
    // TODO: Implement the video deletion here.

    this.dialogRef.close();
  }
}
