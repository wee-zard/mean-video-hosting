import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoService } from '../../shared/services/video.service';
import { VideoSearchRequest } from '../../shared/models/request/VideoSearchRequest';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { SeverityEnums } from '../../shared/enums/SeverityEnums';
import { VideoResponse } from '../../shared/models/response/VideoResponse';
import { AutoUnsubscribe } from '../../shared/decorators/AutoUnsubscribe';
import { VideoListDisplayComponent } from '../../component/video-list-display/video-list-display.component';

@Component({
  selector: 'app-home',
  imports: [VideoListDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
@AutoUnsubscribe
export class HomeComponent implements OnInit {
  listOfVideos: VideoResponse[] = [];
  videoSearchRequest: VideoSearchRequest = {};
  private listOfVideosSubs?: Subscription;

  constructor(
    private videoService: VideoService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.videoService
      .getVideosBySearchParams(this.videoSearchRequest)
      .then((videos) =>
        // TODO: Remove the filter condition before submitting the project to the client.
        this.videoService.updateListOfVideos(
          videos.filter((video, index) => index < 6),
        ),
      )
      .catch((error) =>
        this.snackbarService.open(
          SeverityEnums.ERROR,
          error?.error?.error ?? error.message,
        ),
      );

    this.listOfVideosSubs = this.videoService.listOfVideos$.subscribe(
      (listOfVideos) => (this.listOfVideos = listOfVideos),
    );
  }
}
