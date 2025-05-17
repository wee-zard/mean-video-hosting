import { Component, Inject, OnInit } from '@angular/core';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackdropComponent } from '../../../component/backdrop/backdrop.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { VideoImagePathPipe } from '../../../shared/pipes/video-image-path.pipe';
import { UserModel } from '../../../shared/models/models/UserModels';
import { Subscription } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  VideoUpdateErrorType,
  VideoUpdateField,
  VideoUpdateFormBuilderType,
  VideoUpdateModel,
  VideoUpdateType,
} from '../../../shared/models/forms/VideoUpdateForm';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormValidationService } from '../../../shared/services/form-validation.service';
import { VideoService } from '../../../shared/services/video.service';
import { VideoUpdateRequest } from '../../../shared/models/request/VideoUpdateRequest';
import { convertFormToModel } from '../../../shared/helper/ConversionHelper';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import MessageEnums from '../../../shared/enums/MessageEnums';

@Component({
  selector: 'app-chanel-video-edit-dialog',
  imports: [
    BackdropComponent,
    CommonModule,
    MatButtonModule,
    VideoImagePathPipe,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './chanel-video-edit-dialog.component.html',
  styleUrl: './chanel-video-edit-dialog.component.scss',
})
export class ChanelVideoEditDialogComponent implements OnInit {
  form!: FormGroup<VideoUpdateType>;
  formError?: VideoUpdateErrorType;
  formFields: typeof VideoUpdateField = VideoUpdateField;
  isLoading: boolean = false;
  userModel?: UserModel;
  private subs1?: Subscription;

  constructor(
    private formBuilderService: FormBuilderService,
    private userService: UserService,
    private videoService: VideoService,
    private validation: FormValidationService,
    private snack: SnackbarService,
    public dialogRef: MatDialogRef<ChanelVideoEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VideoResponse,
  ) {}

  ngOnInit(): void {
    const builder: VideoUpdateFormBuilderType = {
      [VideoUpdateField.TITLE]: this.data.title,
      [VideoUpdateField.DESCRIPTION]: this.data.description,
    };
    this.form = this.formBuilderService.buildVideoUpdateForm(builder);

    this.subs1 = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
    );
  }

  handleOnCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.isLoading = true;

    if (!this.form.valid) {
      this.formError = this.validation.getErrorMessages<VideoUpdateErrorType>(
        this.form.controls,
        this.formFields,
      );
      this.isLoading = false;
      return;
    }

    const model = convertFormToModel<VideoUpdateModel>(this.form.value);
    const request: VideoUpdateRequest = {
      id: this.data.id,
      title: model[VideoUpdateField.TITLE],
      description: model[VideoUpdateField.DESCRIPTION],
    };

    this.videoService
      .updateVideo(request)
      .then(() => {
        this.videoService.reloadVideoWebsite();
        this.handleOnCancelClick();
      })
      .catch(() => this.snack.on(MessageEnums.UPDATE_VIDEO_ERROR))
      .finally(() => (this.isLoading = false));
  }
}
