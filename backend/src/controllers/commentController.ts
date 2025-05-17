import { Request, Response } from 'express';
import { ICommentsType } from '../model/mongodbModels/Comment';
import { UpdateCommentRequest } from '../model/request/UpdateCommentRequest';
import { AuthenticateUser } from '../decorators/authDecorator';
import { RootService } from '../services/rootService';

export class CommentController {
  /**
   * Fetches the number of comments under the requested video.
   */
  getNumberOfCommentsUnderVideo(req: Request, res: Response): void {
    const videoId = req.query.video_id as string;
    RootService.commentService
      .getNumberOfCommentsUnderVideo(videoId)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }

  /**
   * Fetch the list of comments related to a video
   */
  getCommentsByVideoId(req: Request, res: Response): void {
    const videoId = req.query.video_id as string;
    RootService.commentService
      .getCommentsByVideoId(videoId)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }

  /**
   * Deletes a comment by id.
   */
  @AuthenticateUser
  deleteCommentById(req: Request, res: Response): void {
    const commentId = req.query.comment_id as string;
    const videoId = req.query.video_id as string;
    RootService.commentService
      .deleteCommentById(commentId, videoId)
      .then(() => res.status(200).send(true))
      .catch((err) => res.status(400).send(err));
  }

  /**
   * Creates a new comment with the provided params
   */
  @AuthenticateUser
  createComment(req: Request, res: Response): void {
    const requestBody: ICommentsType = req.body;
    RootService.commentService
      .createComment(requestBody)
      .then(() => res.status(200).send(true))
      .catch((error) => res.status(400).send(error));
  }

  /**
   * Updates a comment with a new message.
   */
  @AuthenticateUser
  updateComment(req: Request, res: Response): void {
    const requestBody: UpdateCommentRequest = req.body;
    RootService.commentService
      .updateComment(requestBody.commentId, requestBody.message)
      .then(() => res.status(200).send(true))
      .catch((error) => res.status(400).send(error));
  }

  /**
   * Hide a comment to be displayed under the video.
   */
  @AuthenticateUser
  hideComment(req: Request, res: Response): void {
    const commentId = req.body.comment_id as string;
    RootService.commentService
      .hideCommentById(commentId)
      .then(() => res.status(200).send(true))
      .catch((error) => res.status(400).send(error));
  }
}
