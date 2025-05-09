import { Component, Input } from '@angular/core';
import { VideoCardComponent } from '../video-card/video-card.component';
import { CommonModule } from '@angular/common';
import { VideoResponse } from '../../shared/models/response/VideoResponse';

@Component({
  selector: 'app-video-list-display',
  imports: [CommonModule, VideoCardComponent],
  templateUrl: './video-list-display.component.html',
  styleUrl: './video-list-display.component.scss',
})
export class VideoListDisplayComponent {
  @Input() listOfVideos: VideoResponse[] = [];
}
