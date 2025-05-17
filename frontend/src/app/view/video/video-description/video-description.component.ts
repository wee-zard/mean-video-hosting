import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ViewCountFormatterPipe } from '../../../shared/pipes/view-count-formatter.pipe';
import { UploadTimeFormatterPipe } from '../../../shared/pipes/upload-time-formatter.pipe';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { VideoService } from '../../../shared/services/video.service';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';

@Component({
  selector: 'app-video-description',
  imports: [
    CommonModule,
    MatChipsModule,
    ViewCountFormatterPipe,
    UploadTimeFormatterPipe,
  ],
  templateUrl: './video-description.component.html',
  styleUrl: './video-description.component.scss',
})
@AutoUnsubscribe
export class VideoDescriptionComponent implements OnInit {
  video?: VideoResponse;
  private subs1?: Subscription;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.subs1 = this.videoService.selectedVideo$.subscribe(
      (selectedVideo) => (this.video = selectedVideo),
    );
  }
}
