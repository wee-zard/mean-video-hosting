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
import { SeverityEnums } from '../../../shared/enums/SeverityEnums';
import { CommonModule } from '@angular/common';
import { CommentDialogEnums } from '../../../shared/enums/CommentDialogEnums';
import { CommentDialogDataType } from '../../../shared/models/CommentDialogDataType';
import { CommentRequest } from '../../../shared/models/request/CommentRequest';
import { UserModel } from '../../../shared/models/models/UserModels';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { Subscription } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';
import { CommentService } from '../../../shared/services/comment.service';

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
  isLoading: boolean = false;
  private userModelSubscription?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommentDialogDataType,
    private formBuilderService: FormBuilderService,
    private snackbarService: SnackbarService,
    private userService: UserService,
    private commentService: CommentService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilderService.buildCommentForm();

    this.userModelSubscription = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
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

    if (!this.form.value || !this.userModel) {
      this.snackbarService.open(
        SeverityEnums.ERROR,
        'The comment form is invalid!',
      );
      this.isLoading = false;
      return;
    }

    const commentRequest: CommentRequest = {
      replyId: this.data.replyCommentId ?? null,
      videoId: this.data.videoId,
      user: {
        userId: this.userModel.id,
        userName: this.userModel.username,
        profilePicturePath: this.userModel.profilePicturePath,
      },
      lastModification: new Date(Date.now()).toISOString(),
      message: this.form.get(CommentFormField.MESSAGE)?.value as string,
    };

    this.commentService
      .createComment(commentRequest)
      .then(() => {
        this.commentService
          .getCommentsByVideoId(this.data.videoId)
          .then((data) => {
            this.commentService.updateListOfComments(data);
            this.onNoClick();
          })
          .catch(() =>
            this.snackbarService.open(
              SeverityEnums.ERROR,
              'Unexpected error occurred while fetching the list of comments!',
            ),
          );
      })
      .catch(() =>
        this.snackbarService.open(
          SeverityEnums.ERROR,
          'Unexpected error occurred while saving the new comment!',
        ),
      )
      .finally(() => (this.isLoading = false));
  }
}
