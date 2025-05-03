import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../shared/services/video.service';
import { VideoSearchRequest } from '../../shared/models/request/VideoSearchRequest';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { SnackbarSeverityEnums } from '../../shared/enums/SnackbarSeverityEnums';
import { CommonModule } from '@angular/common';
import { VideoResponse } from '../../shared/models/response/VideoResponse';
import { VideoCardComponent } from '../../component/video-card/video-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, VideoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  listOfVideos: VideoResponse[] = [];
  videoSearchRequest: VideoSearchRequest = {};

  constructor(
    private videoService: VideoService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.videoService
      .getVideosBySearchParams(this.videoSearchRequest)
      .then((videos) => {
        videos = [videos[0]];
        this.listOfVideos = [...videos];
      })
      .catch((error) =>
        this.snackbarService.open(
          SnackbarSeverityEnums.ERROR,
          error?.error?.error ?? error.message,
        ),
      );
  }
}
