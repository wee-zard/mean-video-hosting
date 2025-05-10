import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BackdropComponent } from '../../backdrop/backdrop.component';
import {
  VideoSearchFormFields,
  VideoSearchFormType,
} from '../../../shared/models/forms/VideoSearchForm';
import { CommonModule } from '@angular/common';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VideoService } from '../../../shared/services/video.service';
import { VideoSearchRequest } from '../../../shared/models/request/VideoSearchRequest';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { SeverityEnums } from '../../../shared/enums/SeverityEnums';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  imports: [
    BackdropComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent implements OnInit {
  isLoading: boolean = false;
  form!: FormGroup<VideoSearchFormType>;
  formFields: typeof VideoSearchFormFields = VideoSearchFormFields;
  isDisplayed: boolean = false;
  private isDisplayedSubscription?: Subscription;

  constructor(
    private formBuilder: FormBuilderService,
    private videoService: VideoService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.buildVideoSearchForm();

    this.isDisplayedSubscription =
      this.videoService.isSearchbarDisplayed$.subscribe(
        (data) => (this.isDisplayed = data),
      );
  }

  async onSubmit(): Promise<void> {
    const videoSearchRequest: VideoSearchRequest = this.form.value as any;

    this.videoService
      .getVideosBySearchParams(videoSearchRequest)
      .then((res) => this.videoService.updateListOfVideos(res))
      .catch(() =>
        this.snackbarService.open(
          SeverityEnums.ERROR,
          'Error while fetching the videos based on the search terms!',
        ),
      );
  }
}
