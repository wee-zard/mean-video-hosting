import { Component, computed, OnInit, signal } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Subscription } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UserModel } from '../../../shared/models/models/UserModels';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { UserService } from '../../../shared/services/user.service';
import { FormValidationService } from '../../../shared/services/form-validation.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { convertFormToModel } from '../../../shared/helper/ConversionHelper';
import MessageEnums from '../../../shared/enums/MessageEnums';
import { BackdropComponent } from '../../../component/backdrop/backdrop.component';
import { UploadService } from '../../../shared/services/upload.service';
import { VideoUploadRequest } from '../../../shared/models/request/VideoUploadRequest';
import { VideoService } from '../../../shared/services/video.service';
import { TagService } from '../../../shared/services/tag.service';
import { TagResponse } from '../../../shared/models/response/TagResponse';
import {
  VideoUploadErrorType,
  VideoUploadField,
  VideoUploadModel,
  VideoUploadType,
} from '../../../shared/models/forms/VideoUploadForm';

@Component({
  selector: 'app-chanel-video-upload-dialog',
  imports: [
    BackdropComponent,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  templateUrl: './chanel-video-upload-dialog.component.html',
  styleUrl: './chanel-video-upload-dialog.component.scss',
})
export class ChanelVideoUploadDialogComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  uploadedFile?: File;
  requiredFileType = 'video/mp4';
  form!: FormGroup<VideoUploadType>;
  formError?: VideoUploadErrorType;
  formFields: typeof VideoUploadField = VideoUploadField;
  isLoading: boolean = false;
  userModel?: UserModel;
  private subs1?: Subscription;

  constructor(
    private formBuilderService: FormBuilderService,
    private userService: UserService,
    private videoService: VideoService,
    private uploadService: UploadService,
    private validation: FormValidationService,
    private snack: SnackbarService,
    private tagService: TagService,
    public dialogRef: MatDialogRef<ChanelVideoUploadDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilderService.buildVideoUploadForm();

    this.subs1 = this.userService.userModel$.subscribe(
      (data) => (this.userModel = data),
    );
  }

  handleOnCancelClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (!file) {
      return;
    }

    this.uploadedFile = file;
  }

  async onSubmit(): Promise<void> {
    this.isLoading = true;

    if (!this.form.valid) {
      this.formError = this.validation.getErrorMessages<VideoUploadErrorType>(
        this.form.controls,
        this.formFields,
      );
      this.isLoading = false;
      return;
    }

    if (!this.uploadedFile) {
      this.snack.on(MessageEnums.VIDEO_NOT_UPLOADED_ERROR);
      this.isLoading = false;
      return;
    }

    if (!this.userModel) {
      this.snack.on(MessageEnums.USER_NOT_PROVIDED);
      this.isLoading = false;
      return;
    }

    try {
      const videoBlob = new Blob([this.uploadedFile], { type: 'video/*' });
      const res = await this.uploadService.expressServer(videoBlob);
      this.uploadToYoutubeServer(res.filename, this.userModel);
    } catch (error) {
      this.snack.on(MessageEnums.UPLOAD_TO_EXPRESS_ERROR);
      this.isLoading = false;
    }
  }

  private async uploadToYoutubeServer(
    videoPath: string,
    user: UserModel,
  ): Promise<void> {
    try {
      const model = convertFormToModel<VideoUploadModel>(this.form.value);
      const video: VideoUploadRequest = {
        videoPath: videoPath,
        description: model[VideoUploadField.DESCRIPTION],
        title: model[VideoUploadField.TITLE],
        upload: {
          userId: user.id,
          userName: user.username,
          userImagePath: user.profilePicturePath ?? '',
        },
        tags: [],
        categories: [],
      };

      await this.uploadService.youtubeServer(video);
      this.snack.on(MessageEnums.UPLOAD_TO_YOUTUBE_DONE);
      this.videoService.reloadVideoWebsite();
      this.handleOnCancelClick();
    } catch (error) {
      this.snack.on(MessageEnums.UPLOAD_TO_YOUTUBE_ERROR);
    } finally {
      this.isLoading = false;
    }
  }
}
