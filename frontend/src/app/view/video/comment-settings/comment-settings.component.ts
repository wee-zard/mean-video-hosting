import { CommentService } from './../../../shared/services/comment.service';
import { SnackbarService } from './../../../shared/services/snackbar.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommentResponse } from '../../../shared/models/response/CommentResponse';
import { UserService } from '../../../shared/services/user.service';
import { UserModel } from '../../../shared/models/models/UserModels';
import { Subscription } from 'rxjs';
import { isVideoUploaderOrAdmin } from '../../../shared/helper/UserRoleHelper';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { CommentDialogEnums } from '../../../shared/enums/CommentDialogEnums';
import { commentMatDialogConfigs } from '../../../shared/helper/DialogHelper';
import MessageEnums from '../../../shared/enums/MessageEnums';
import { VideoService } from '../../../shared/services/video.service';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';

@Component({
  selector: 'app-comment-settings',
  imports: [
    MatMenuModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './comment-settings.component.html',
  styleUrl: './comment-settings.component.scss',
})
@AutoUnsubscribe
export class CommentSettingsComponent implements OnInit {
  @Input() comment!: CommentResponse;
  userModel?: UserModel;
  video?: VideoResponse;
  listOfComments: CommentResponse[] = [];
  private subs1?: Subscription;
  private subs2?: Subscription;

  constructor(
    private userService: UserService,
    private videoService: VideoService,
    private commentService: CommentService,
    private snack: SnackbarService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.subs1 = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
    );

    this.subs2 = this.videoService.selectedVideo$.subscribe(
      (data) => (this.video = data),
    );
  }

  isVideoUploaderOrAdmin(): boolean {
    return isVideoUploaderOrAdmin(this.comment, this.userModel);
  }

  isLoggedIn(): boolean {
    return !!this.userModel;
  }

  isItOwnComment(): boolean {
    return this.comment.user.userId === this.userModel?.id;
  }

  isReplyCanBeWritten(): boolean {
    return !this.comment.replyId;
  }

  getHideMessage(): string {
    return this.comment.isHidden ? 'Unhide comment' : 'Hide comment';
  }

  getHideIcon(): string {
    return this.comment.isHidden ? 'visibility_off' : 'visibility';
  }

  /**
   * Remove the specific comment from the website.
   */
  handleCommentRemoval(): void {
    if (!this.isVideoUploaderOrAdmin()) {
      this.snack.on(MessageEnums.DENIED_COMMENT_DELETION);
      return;
    }

    if (!this.video) {
      this.snack.on(MessageEnums.VIDEO_NOT_PROVIDED);
      return;
    }

    this.commentService
      .removeCommentById(this.comment.id, this.video.id)
      .then(() => {
        this.snack.on(MessageEnums.COMMENT_IS_DELETED);
        this.commentService.fetchLatestComments(this.video, this.userModel);
        this.videoService.reloadVideoWebsite();
      })
      .catch(() => this.snack.on(MessageEnums.REMOVE_COMMENT_BY_ID));
  }

  openCommentDialog(isEdit: boolean = false): void {
    this.dialog.open(
      CommentDialogComponent,
      commentMatDialogConfigs(
        this.comment.videoId,
        isEdit
          ? CommentDialogEnums.EDIT_COMMENT
          : CommentDialogEnums.REPLY_TO_COMMENT,
        this.comment.id,
        isEdit ? this.comment.message : undefined,
      ),
    );
  }

  handleCommentHide(): void {
    const visibilityMessage = this.comment.isHidden
      ? MessageEnums.COMMENT_IS_NOW_NOT_HIDDEN
      : MessageEnums.COMMENT_IS_NOW_HIDDEN;
    this.commentService
      .hideComment(this.comment.id)
      .then(() => {
        this.snack.on(visibilityMessage);
        this.commentService.fetchLatestComments(this.video, this.userModel);
      })
      .catch(() => this.snack.on(MessageEnums.COMMENT_HIDE_CHANGE_ERROR));
  }
}
