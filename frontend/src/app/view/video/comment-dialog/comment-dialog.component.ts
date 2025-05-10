import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  CommentFormField,
  CommentFormType,
} from '../../../shared/models/forms/CommentForm';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { BackdropComponent } from '../../../component/backdrop/backdrop.component';
import { CommonModule } from '@angular/common';
import { CommentDialogEnums } from '../../../shared/enums/CommentDialogEnums';
import { CommentDialogDataType } from '../../../shared/models/CommentDialogDataType';
import { CommentRequest } from '../../../shared/models/request/CommentRequest';
import { UserModel } from '../../../shared/models/models/UserModels';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { Subscription } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';
import { CommentService } from '../../../shared/services/comment.service';
import MessageEnums from '../../../shared/enums/MessageEnums';
import { UpdateCommentRequest } from '../../../shared/models/request/UpdateCommentRequest';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { VideoService } from '../../../shared/services/video.service';

@Component({
  selector: 'app-comment-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    BackdropComponent,
    CommonModule,
  ],
  templateUrl: './comment-dialog.component.html',
  styleUrl: './comment-dialog.component.scss',
})
@AutoUnsubscribe
export class CommentDialogComponent implements OnInit {
  form!: FormGroup<CommentFormType>;
  formFields: typeof CommentFormField = CommentFormField;
  userModel?: UserModel;
  video?: VideoResponse;
  isLoading: boolean = false;
  private subs1?: Subscription;
  private subs2?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommentDialogDataType,
    private formBuilderService: FormBuilderService,
    private snack: SnackbarService,
    private userService: UserService,
    private commentService: CommentService,
    private videoService: VideoService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilderService.buildCommentForm(
      this.data.commentMessage,
    );

    this.subs1 = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
    );

    this.subs2 = this.videoService.selectedVideo$.subscribe(
      (data) => (this.video = data),
    );
  }

  getDialogTitleMessage(): string {
    switch (this.data.type) {
      case CommentDialogEnums.REPLY_TO_COMMENT:
        return 'Reply to comment!';
      case CommentDialogEnums.EDIT_COMMENT:
        return 'Edit your comment!';
      case CommentDialogEnums.WRITE_COMMENT_TO_ROOT:
        return 'Write a new comment!';
      default:
        return '';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.isLoading = true;

    if (!this.userModel) {
      this.snack.on(MessageEnums.USER_NOT_PROVIDED);
      this.isLoading = false;
      return;
    }

    if (!this.form.value) {
      this.snack.on(MessageEnums.INVALID_COMMENT_FORM);
      this.isLoading = false;
      return;
    }

    if (this.data.type === CommentDialogEnums.EDIT_COMMENT) {
      this.handleUpdateComment();
    } else {
      this.handleNewCommentCreation(this.userModel);
    }
  }

  private handleNewCommentCreation(user: UserModel): void {
    const commentRequest: CommentRequest = {
      replyId: this.data.replyCommentId ?? null,
      videoId: this.data.videoId,
      user: {
        userId: user.id,
        userName: user.username,
        profilePicturePath: user.profilePicturePath,
      },
      lastModification: new Date(Date.now()).toISOString(),
      message: this.form.get(CommentFormField.MESSAGE)?.value as string,
    };

    this.commentService
      .createComment(commentRequest)
      .then(() => this.updateCommentsAfterCommentAction())
      .catch(() => this.snack.on(MessageEnums.CREATE_COMMENT_ERROR))
      .finally(() => (this.isLoading = false));
  }

  private handleUpdateComment(): void {
    const request: UpdateCommentRequest = {
      commentId: this.data.replyCommentId ?? '',
      message: this.form.get(CommentFormField.MESSAGE)?.value as string,
    };

    this.commentService
      .updateComment(request)
      .then(() => this.updateCommentsAfterCommentAction())
      .catch(() => this.snack.on(MessageEnums.CREATE_COMMENT_ERROR))
      .finally(() => (this.isLoading = false));
  }

  private updateCommentsAfterCommentAction(): void {
    this.commentService.fetchLatestComments(this.video, this.userModel);
    this.onNoClick();
  }
}
