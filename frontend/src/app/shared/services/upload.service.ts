import { getRequestHeader } from './../helper/HttpHeaderHelper';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoUploadRequest } from '../models/request/VideoUploadRequest';
import { MulterUploadResponse } from '../models/response/ExpressVideoUploadResponse';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private server: string = `${environment.serverUrl}/uploader`;

  constructor(private http: HttpClient) {}

  /**
   * Uploads a video to the express server.
   *
   * @param videoBlob The video blob to upload to the server.
   */
  expressServer(videoBlob: Blob): Promise<MulterUploadResponse> {
    let formData = new FormData();
    formData.append('file', videoBlob);

    const headers = new HttpHeaders({
      enctype: 'multipart/form-data',
    });

    return lastValueFrom(
      this.http.post<MulterUploadResponse>(
        `${this.server}/upload-to-express`,
        formData,
        {
          headers,
        },
      ),
    );
  }

  /**
   * Uploads a video to the youtube server.
   *
   * @param request The request to send to the youtube.
   */
  youtubeServer(request: VideoUploadRequest): Promise<boolean> {
    return lastValueFrom(
      this.http.post<boolean>(
        `${this.server}/upload-to-youtube`,
        request,
        getRequestHeader({ isWithCredentials: true }),
      ),
    );
  }
}
