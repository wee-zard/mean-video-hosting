import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { Subscription } from 'rxjs';
import { VideoService } from '../../../shared/services/video.service';
import { CommentResponse } from '../../../shared/models/response/CommentResponse';
import { UploadTimeFormatterPipe } from '../../../shared/pipes/upload-time-formatter.pipe';
import { SiteRouteEnums } from '../../../shared/enums/SiteRouteEnums';
import { CommentSettingsComponent } from '../comment-settings/comment-settings.component';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { commentMatDialogConfigs } from '../../../shared/helper/DialogHelper';
import { CommentDialogEnums } from '../../../shared/enums/CommentDialogEnums';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import MessageEnums from '../../../shared/enums/MessageEnums';
import { CommentService } from './../../../shared/services/comment.service';
import { UserService } from '../../../shared/services/user.service';
import { UserModel } from '../../../shared/models/models/UserModels';

@Component({
  selector: 'app-video-comments',
  imports: [
    CommonModule,
    UploadTimeFormatterPipe,
    MatButtonModule,
    MatIconModule,
    CommentSettingsComponent,
    MatTooltipModule,
  ],
  templateUrl: './video-comments.component.html',
  styleUrl: './video-comments.component.scss',
})
@AutoUnsubscribe
export class VideoCommentsComponent implements OnInit {
  @Input() rootComment?: CommentResponse;
  listOfComments: CommentResponse[] = [];
  user?: UserModel;
  video?: VideoResponse;
  private subs1?: Subscription;
  private subs2?: Subscription;
  private subs3?: Subscription;

  constructor(
    private videoService: VideoService,
    private commentService: CommentService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private snack: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.subs1 = this.videoService.selectedVideo$.subscribe(
      (data) => (this.video = data),
    );

    this.subs2 = this.commentService.listOfComments$.subscribe(
      (data) => (this.listOfComments = data),
    );

    this.subs3 = this.userService.userModel$.subscribe(
      (data) => (this.user = data),
    );
  }

  handleUploaderOnClick(userId: string): void {
    this.router.navigateByUrl(`/${SiteRouteEnums.CHANEL_PAGE}/${userId}`);
  }

  getNumberOfReplies(parentComment: CommentResponse): number {
    return this.listOfComments.filter(
      (comment) => comment.replyId === parentComment.id,
    ).length;
  }

  onHeadlineIconClick(parentComment: CommentResponse): void {
    this.listOfComments = this.listOfComments.map((comment) => ({
      ...comment,
      isCommentClicked:
        comment.id === parentComment.id
          ? !comment.isCommentClicked
          : comment.isCommentClicked,
    }));
  }

  onNewCommentClick(): void {
    if (!this.video) {
      this.snack.on(MessageEnums.VIDEO_NOT_PROVIDED);
      return;
    }

    this.dialog.open(
      CommentDialogComponent,
      commentMatDialogConfigs(
        this.video.id,
        CommentDialogEnums.WRITE_COMMENT_TO_ROOT,
      ),
    );
  }
}
