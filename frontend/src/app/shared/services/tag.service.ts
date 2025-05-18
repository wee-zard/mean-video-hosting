import { getRequestHeader } from './../helper/HttpHeaderHelper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { TagResponse } from '../models/response/TagResponse';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private server: string = `${environment.serverUrl}/tag`;

  constructor(private http: HttpClient) {}

  /**
   * Fetches the list of tags from the server.
   *
   * @Returns Returns the list of tags from the server.
   */
  getTags(): Promise<TagResponse[]> {
    return lastValueFrom(
      this.http.get<TagResponse[]>(`${this.server}/`, getRequestHeader({})),
    );
  }

  /**
   * Creates a new tag.
   *
   * @param name The name of the new tag to create
   * @Returns Returns true if the process of the update finished successfully.
   */
  updateVideoRating(name: string): Promise<boolean> {
    return lastValueFrom(
      this.http.post<boolean>(
        `${this.server}/`,
        { name: name },
        getRequestHeader({ isWithCredentials: true }),
      ),
    );
  }
}
