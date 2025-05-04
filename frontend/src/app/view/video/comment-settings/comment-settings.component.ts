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
import { isContentCreatorOrAdmin } from '../../../shared/helper/UserRoleHelper';
import { SeverityEnums } from '../../../shared/enums/SeverityEnums';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { CommentDialogEnums } from '../../../shared/enums/CommentDialogEnums';
import { CommentDialogDataType } from '../../../shared/models/CommentDialogDataType';
import { commentMatDialogConfigs } from '../../../shared/helper/DialogHelper';

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
  listOfComments: CommentResponse[] = [];
  private userModelSubscription?: Subscription;

  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.userModelSubscription = this.userService.userModel$.subscribe(
      (res) => (this.userModel = res),
    );
  }

  isContentCreatorOrAdmin(): boolean {
    return isContentCreatorOrAdmin(this.userModel);
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

  /**
   * Remove the specific comment from the website.
   * TODO: Nem törli megfelelően a kommenteket. Javítani kell
   */
  handleCommentRemoval(): void {
    if (!this.isContentCreatorOrAdmin()) {
      this.snackbarService.open(
        SeverityEnums.ERROR,
        "You don't have permission to remove the comment!",
      );
      return;
    }

    this.commentService
      .removeCommentById(this.comment.id)
      .then(() => {
        this.snackbarService.open(
          SeverityEnums.SUCCESS,
          'Comment has been successfully removed!',
        );
        // Update the list of comments by fetching the comments from the server.
        this.commentService
          .getCommentsByVideoId(this.comment.videoId)
          .then((res) => this.commentService.updateListOfComments(res));
      })
      .catch(() =>
        this.snackbarService.open(
          SeverityEnums.ERROR,
          'Unexpected error occurred while removing the comment!',
        ),
      );
  }

  /**
   * Reply to a specific comment by opening a dialog window.
   */
  handleCommentReply(): void {
    this.dialog.open(
      CommentDialogComponent,
      commentMatDialogConfigs(
        this.comment.videoId,
        CommentDialogEnums.REPLY_TO_COMMENT,
        this.comment.id,
      ),
    );
  }
}
