import { getRequestHeader } from '../helper/HttpHeaderHelper';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { CommentResponse } from '../models/response/CommentResponse';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private server: string = `${environment.serverUrl}/comment`;

  constructor(private http: HttpClient) {}

  /**
   * Fetch the list of comments related to a video.
   */
  getVideosBySearchParams(videoId: string): Promise<CommentResponse[]> {
    const queryParams = new HttpParams().append('video_id', videoId);
    return lastValueFrom(
      this.http.get<CommentResponse[]>(
        `${this.server}/`,
        getRequestHeader({ params: queryParams }),
      ),
    );
  }
}
