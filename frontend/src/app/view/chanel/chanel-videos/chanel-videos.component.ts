import { Component, OnInit } from '@angular/core';
import { VideoListDisplayComponent } from '../../../component/video-list-display/video-list-display.component';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { Subscription } from 'rxjs';
import { VideoService } from '../../../shared/services/video.service';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';

@Component({
  selector: 'app-chanel-videos',
  imports: [VideoListDisplayComponent],
  templateUrl: './chanel-videos.component.html',
  styleUrl: './chanel-videos.component.scss',
})
@AutoUnsubscribe
export class ChanelVideosComponent implements OnInit {
  listOfVideos: VideoResponse[] = [];
  private subs1?: Subscription;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.subs1 = this.videoService.listOfChanelVideos$.subscribe(
      (data) => (this.listOfVideos = data),
    );
  }
}
