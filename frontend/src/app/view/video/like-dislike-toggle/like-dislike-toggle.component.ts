import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { LikeCountFormatterPipe } from '../../../shared/pipes/like-count-formatter.pipe';
import { VideoResponse } from '../../../shared/models/response/VideoResponse';
import { UserModel } from '../../../shared/models/models/UserModels';
import { UserService } from '../../../shared/services/user.service';
import { AutoUnsubscribe } from '../../../shared/decorators/AutoUnsubscribe';
import { VideoService } from '../../../shared/services/video.service';
import { LikeToggleType } from '../../../shared/models/LikeToggleType';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import MessageEnums from '../../../shared/enums/MessageEnums';
import { VideoRatingUpdateRequest } from '../../../shared/models/request/VideoRatingUpdateRequest';
import { StorageKeyEnum } from '../../../shared/enums/StorageKeyEnums';

@Component({
  selector: 'app-like-dislike-toggle',
  imports: [
    MatButtonToggleModule,
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    LikeCountFormatterPipe,
  ],
  templateUrl: './like-dislike-toggle.component.html',
  styleUrl: './like-dislike-toggle.component.scss',
})
@AutoUnsubscribe
export class LikeDislikeToggleComponent implements OnInit {
  video?: VideoResponse;
  userModel?: UserModel;
  selectedToggleOption: LikeToggleType;
  private subs1?: Subscription;
  private subs2?: Subscription;

  constructor(
    private userService: UserService,
    private videoService: VideoService,
    private snack: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.subs2 = this.videoService.selectedVideo$.subscribe((data) => {
      this.video = data;
      this.updateSelectedToggleOption();
    });

    this.subs1 = this.userService.userModel$.subscribe((data) => {
      this.userModel = data;
      this.updateSelectedToggleOption();
    });
  }

  private updateSelectedToggleOption(): void {
    if (!this.userModel || !this.video) {
      return;
    }

    const foundVideoRating = this.userModel.videoRatings.find(
      (rating) => rating.videoId === this.video?.id,
    );

    this.selectedToggleOption = !foundVideoRating
      ? foundVideoRating
      : foundVideoRating.isLiked
        ? 'like'
        : 'dislike';
  }

  /**
   * Gets the ratio of the number of likes per the all ratings.
   * @returns Returns a percentage.
   */
  getRatio(): number {
    if (!this.video) {
      return 0;
    }

    const allRatings =
      this.video.rating.numberOfLikes + this.video.rating.numberOsfDislikes;

    return Math.round((this.video.rating.numberOfLikes / allRatings) * 100);
  }

  toggleChange(event: any) {
    if (!this.video || !this.userModel) {
      return;
    }

    const toggle = event.source;

    if (toggle && event.value.some((item: any) => item === toggle.value)) {
      toggle.buttonToggleGroup.value = [toggle.value];
    }

    if (!this.selectedToggleOption) {
      this.selectedToggleOption = toggle.value;
    } else {
      if (this.selectedToggleOption === 'like') {
        this.selectedToggleOption =
          toggle.value === 'like' ? undefined : toggle.value;
      } else {
        this.selectedToggleOption =
          toggle.value === 'dislike' ? undefined : toggle.value;
      }
    }

    const isLiked =
      this.selectedToggleOption === 'like'
        ? true
        : this.selectedToggleOption === 'dislike'
          ? false
          : undefined;

    const request: VideoRatingUpdateRequest = {
      video_id: this.video?.id,
      user_id: this.userModel?.id,
      is_liked: isLiked,
    };

    this.videoService
      .updateVideoRating(request)
      .then(() => {
        if (!this.userModel) {
          return;
        }

        this.userService.getUserById(this.userModel.id).then((user) => {
          this.userService.updateUserModel(user);

          if (!this.video) {
            return;
          }

          this.videoService
            .getOneVideoById(this.video.id)
            .then((data) => this.videoService.updateSelectedVideo(data));
        });
      })
      .catch(() => this.snack.on(MessageEnums.UPDATE_RATINGS));
  }
}
