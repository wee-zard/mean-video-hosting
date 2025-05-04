import { getRequestHeader } from '../helper/HttpHeaderHelper';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CommentResponse } from '../models/response/CommentResponse';
import { CommentRequest } from '../models/request/CommentRequest';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private listOfComments = new BehaviorSubject<CommentResponse[]>([]);
  listOfComments$ = this.listOfComments.asObservable();
  private server: string = `${environment.serverUrl}/comment`;

  constructor(private http: HttpClient) {}

  updateListOfComments(data: CommentResponse[]) {
    this.listOfComments.next(data);
  }

  /**
   * Fetch the list of comments related to a video.
   */
  getCommentsByVideoId(videoId: string): Promise<CommentResponse[]> {
    return new Promise((resolve, reject) => {
      const queryParams = new HttpParams().append('video_id', videoId);
      lastValueFrom(
        this.http.get<CommentResponse[]>(
          `${this.server}/`,
          getRequestHeader({ params: queryParams }),
        ),
      )
        .then((res: CommentResponse[]) => {
          const orderedComments = res.sort(
            (a, b) =>
              new Date(b.lastModification).getTime() -
              new Date(a.lastModification).getTime(),
          );
          resolve(orderedComments);
        })
        .catch((error) => reject(error));
    });
  }

  /**
   * Removes a comment by id
   * @param commentId The comment to remove.
   * @returns Returns true if the comment successfully got removed, else false.
   */
  removeCommentById(commentId: string): Promise<boolean> {
    const queryParams = new HttpParams().append('comment_id', commentId);
    return lastValueFrom(
      this.http.delete<boolean>(
        `${this.server}/`,
        getRequestHeader({ isWithCredentials: true, params: queryParams }),
      ),
    );
  }

  /**
   * Creates a new comment.
   * @param comment The comment to create.
   */
  createComment(comment: CommentRequest): Promise<boolean> {
    return lastValueFrom(
      this.http.post<boolean>(
        `${this.server}/create`,
        comment,
        getRequestHeader({ isWithCredentials: true }),
      ),
    );
  }
}
