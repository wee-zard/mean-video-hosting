import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { IsoDateTimeFormatterPipe } from '../../../shared/pipes/iso-date-time-formatter.pipe';
import { VideoService } from '../../../shared/services/video.service';
import { UserService } from '../../../shared/services/user.service';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { UserModel } from '../../../shared/models/models/UserModels';
import { getLastUrlChunk } from '../../../shared/helper/UrlParserHelper';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';

@Component({
  selector: 'app-chanel-header',
  imports: [CommonModule, IsoDateTimeFormatterPipe, MatTabsModule],
  templateUrl: './chanel-header.component.html',
  styleUrl: './chanel-header.component.scss',
})
@AutoUnsubscribe
export class ChanelHeaderComponent {
  user?: UserModel;
  uploadedVideos: VideoResponse[] = [];
  private subs1?: Subscription;

  constructor(
    private userService: UserService,
    private videoService: VideoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const userId = getLastUrlChunk(this.router.url);
    this.userService.getUserById(userId).then((data) => (this.user = data));

    this.subs1 = this.videoService.listOfChanelVideos$.subscribe(
      (data) => (this.uploadedVideos = data),
    );
  }

  getUploadedVideoFormatter(): string {
    const multiple = this.uploadedVideos.length > 1 ? 's' : '';
    return `${this.uploadedVideos.length} uploaded video${multiple}`;
  }
}
