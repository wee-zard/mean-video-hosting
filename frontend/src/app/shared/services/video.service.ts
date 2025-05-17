import { getRequestHeader } from './../helper/HttpHeaderHelper';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { VideoSearchRequest } from '../models/request/VideoSearchRequest';
import { VideoResponse } from '../models/response/VideoResponse';
import { UserModel } from '../models/models/UserModels';
import { VideoRatingUpdateRequest } from '../models/request/VideoRatingUpdateRequest';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private selectedVideo = new BehaviorSubject<VideoResponse | undefined>(
    undefined,
  );
  selectedVideo$ = this.selectedVideo.asObservable();
  private listOfVideos = new BehaviorSubject<VideoResponse[]>([]);
  listOfVideos$ = this.listOfVideos.asObservable();
  private videoReload = new BehaviorSubject<void>(undefined);
  videoReload$ = this.videoReload.asObservable();
  private listOfChanelVideos = new BehaviorSubject<VideoResponse[]>([]);
  listOfChanelVideos$ = this.listOfChanelVideos.asObservable();
  private isSearchbarDisplayed = new BehaviorSubject<boolean>(false);
  isSearchbarDisplayed$ = this.isSearchbarDisplayed.asObservable();
  server: string = `${environment.serverUrl}/video`;

  constructor(private http: HttpClient) {}

  updateListOfVideos(data: VideoResponse[]) {
    this.listOfVideos.next(data);
  }

  updateSelectedVideo(data?: VideoResponse) {
    this.selectedVideo.next(data);
  }

  reloadVideoWebsite() {
    this.videoReload.next();
  }

  updateListOfChanelVideos(data: VideoResponse[]) {
    this.listOfChanelVideos.next(data);
  }

  updateSearchbarDisplay(data: boolean) {
    this.isSearchbarDisplayed.next(data);
  }

  /**
   * Login the user with an email and passwords.
   *
   * @param form Holds the email and passwords of the user in an object.
   * @returns Returns a {@link UserModel} if the login finished successfully.
   */
  getVideosBySearchParams(
    request: VideoSearchRequest,
  ): Promise<VideoResponse[]> {
    const queryParams = new HttpParams()
      .append('text', request.text ?? '')
      .append('tag_id', request.tag ?? '')
      .append('category_id', request.category ?? '');

    return lastValueFrom(
      this.http.get<VideoResponse[]>(
        `${this.server}/search`,
        getRequestHeader({ params: queryParams }),
      ),
    );
  }

  /**
   * Checks whether the provided the video is is exists on the server or not.
   *
   * @param videoId The id of the video the validate if exists on the server.
   * @returns Returns true if the video is exists, else false.
   */
  isVideoExists(videoId: string): Promise<boolean> {
    // /is-exists
    const queryParams = new HttpParams().append('video_id', videoId);

    return lastValueFrom(
      this.http.get<boolean>(
        `${this.server}/is-exists`,
        getRequestHeader({ params: queryParams }),
      ),
    );
  }

  /**
   * Get one video from the server based on the video id.
   * @param videoId The id of the video to fetch
   * @returns the video model.
   */
  getOneVideoById(videoId: string): Promise<VideoResponse> {
    // /is-exists
    const queryParams = new HttpParams().append('video_id', videoId);

    return lastValueFrom(
      this.http.get<VideoResponse>(
        `${this.server}/`,
        getRequestHeader({ params: queryParams }),
      ),
    );
  }

  updateVideoRating(
    videoRatingUpdate: VideoRatingUpdateRequest,
  ): Promise<boolean> {
    return lastValueFrom(
      this.http.post<boolean>(
        `${this.server}/update-rating`,
        videoRatingUpdate,
        getRequestHeader({ isWithCredentials: true }),
      ),
    );
  }

  /**
   * Get a list of random videos except the provided video by id.
   * @param videoId The id of the video which must not be included in the list of random videos.
   * @returns list of random videos.
   */
  getRandomVideosExceptVideoId(videoId: string): Promise<VideoResponse[]> {
    const queryParams = new HttpParams().append('id', videoId);
    return lastValueFrom(
      this.http.get<VideoResponse[]>(
        `${this.server}/list-random`,
        getRequestHeader({ params: queryParams }),
      ),
    );
  }

  /**
   * Get a list of videos what a specific user uploaded to the server
   * @param userId The id of the user who uploaded the videos.
   * @returns list of videos uploaded by the user.
   */
  getVideosUploadedByUser(userId: string): Promise<VideoResponse[]> {
    const queryParams = new HttpParams().append('user_id', userId);
    return lastValueFrom(
      this.http.get<VideoResponse[]>(
        `${this.server}/chanel-videos`,
        getRequestHeader({ params: queryParams, isWithCredentials: true }),
      ),
    );
  }

  increaseViewCount(videoId: string): Promise<boolean> {
    const video = {
      videoId: videoId,
    };
    return lastValueFrom(
      this.http.post<boolean>(
        `${this.server}/increase-view-count`,
        video,
        getRequestHeader({}),
      ),
    );
  }

  /**
   * Deletes a video by id.
   *
   * @param videoId the id of the video the delete
   * @Returns Returns true if the process of the update finished successfully.
   */
  deleteVideoByVideoId(videoId: string): Promise<boolean> {
    const queryParams = new HttpParams().append('video_id', videoId);

    return lastValueFrom(
      this.http.delete<boolean>(
        `${this.server}/video`,
        getRequestHeader({ isWithCredentials: true, params: queryParams }),
      ),
    );
  }
}
