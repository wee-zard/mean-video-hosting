import { getRequestHeader } from './../helper/HttpHeaderHelper';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { VideoSearchRequest } from '../models/VideoSearchRequest';
import { VideoResponse } from '../models/response/VideoResponse';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  server: string = `${environment.serverUrl}/video`;

  constructor(private http: HttpClient) {}

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
      .append('text', request.searchByText ?? '')
      .append('tag_id', request.searchByTagId ?? '')
      .append('category_id', request.searchByCategoryId ?? '');

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
}
