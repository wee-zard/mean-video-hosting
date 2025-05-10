import { Router, Request, Response } from 'express';
import { ICommentsType } from '../../model/mongodbModels/Comment';
import CommentService from '../services/commentService';
import CommentServiceImpl from '../services/impl/commentServiceImpl';

export const configureCommentRoutes = (): Router => {
  const router = Router();
  const commentService: CommentService = new CommentServiceImpl();

  /**
   * Fetch the list of comments related to a video
   */
  router.get('/', (req: Request, res: Response) => {
    const videoId = req.query.video_id as string;
    commentService
      .findCommentsByVideoId(videoId)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  });

  /**
   * Deletes a comment by id.
   */
  router.delete('/', async (req: Request, res: Response) => {
    const commentId = req.query.comment_id as string;
    commentService
      .deleteCommentById(commentId)
      .then(() => res.status(200).send(true))
      .catch((err) => res.status(400).send(err));
  });

  /**
   * Creates a new comment with the provided params
   */
  router.post('/create', (req: Request, res: Response) => {
    const requestBody: ICommentsType = req.body;
    commentService
      .createComment(requestBody)
      .then(() => res.status(200).send(true))
      .catch((error) => res.status(400).send(error));
  });

  return router;
};
