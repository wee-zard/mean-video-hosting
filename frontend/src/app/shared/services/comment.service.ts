import { getRequestHeader } from '../helper/HttpHeaderHelper';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CommentResponse } from '../models/response/CommentResponse';
import { CommentRequest } from '../models/request/CommentRequest';
import { UpdateCommentRequest } from '../models/request/UpdateCommentRequest';
import { UserModel } from '../models/models/UserModels';
import { isVideoUploaderOrAdmin } from '../helper/UserRoleHelper';
import { SnackbarService } from './snackbar.service';
import MessageEnums from '../enums/MessageEnums';
import { VideoResponse } from '../models/response/VideoResponse';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private listOfComments = new BehaviorSubject<CommentResponse[]>([]);
  listOfComments$ = this.listOfComments.asObservable();
  private server: string = `${environment.serverUrl}/comment`;

  constructor(
    private http: HttpClient,
    private snack: SnackbarService,
  ) {}

  updateListOfComments(data: CommentResponse[]) {
    this.listOfComments.next(data);
  }

  /**
   * Update the list of comments by fetching the comments from the server.
   */
  fetchLatestComments(video?: VideoResponse, userModel?: UserModel): void {
    if (!video) {
      return;
    }

    this.getCommentsByVideoId(video.id)
      .then((data) => {
        const filteredList = this.filterCommentsByHiddenProperty(
          data,
          userModel,
        );
        this.updateListOfComments(filteredList);
      })
      .catch(() => {
        this.snack.on(MessageEnums.GET_COMMENTS_ERROR);
        this.updateListOfComments([]);
      });
  }

  private filterCommentsByHiddenProperty(
    comments: CommentResponse[],
    userModel?: UserModel,
  ): CommentResponse[] {
    return comments.filter(
      (comment) =>
        !comment.isHidden ||
        this.isItOwnComment(comment, userModel) ||
        this.isVideoUploaderOrAdmin(comment, userModel),
    );
  }

  private isVideoUploaderOrAdmin(
    comment: CommentResponse,
    userModel?: UserModel,
  ): boolean {
    return isVideoUploaderOrAdmin(comment, userModel);
  }

  private isItOwnComment(
    comment: CommentResponse,
    userModel?: UserModel,
  ): boolean {
    return comment.user.userId === userModel?.id;
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

  /**
   * Updates a comment with a new message.
   *
   * @param request The request that contains the id of the comment and the new message of the comment.
   */
  updateComment(request: UpdateCommentRequest): Promise<boolean> {
    return lastValueFrom(
      this.http.post<boolean>(
        `${this.server}/update`,
        request,
        getRequestHeader({ isWithCredentials: true }),
      ),
    );
  }

  /**
   * Hide a comment to be displayed under the video.
   *
   * @param commentId The id of the comment to hide.
   */
  hideComment(commentId: string): Promise<boolean> {
    return lastValueFrom(
      this.http.post<boolean>(
        `${this.server}/hide`,
        { comment_id: commentId },
        getRequestHeader({ isWithCredentials: true }),
      ),
    );
  }
}
