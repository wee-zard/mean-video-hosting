import { Router, Request, Response } from 'express';
import { Comment, ICommentsType } from '../../model/mongodbModels/Comment';

export const configureCommentRoutes = (): Router => {
  const router = Router();

  /**
   * Fetch the list of comments related to a video
   */
  router.get('/', (req: Request, res: Response) => {
    const query = Comment.find({ videoId: req.query.video_id });
    query.then((result) => res.status(200).send(result)).catch(() => res.status(400).send([]));
  });

  /**
   * Removes a comment.
   * TODO: Remove the sub-comments as well.
   */
  router.delete('/', async (req: Request, res: Response) => {
    const commentId = req.query.comment_id;

    try {
      const listOfComments: ICommentsType[] = await Comment.find({ replayId: commentId });
      let removeComments = [...listOfComments.map((comment) => comment.id), commentId];
      await Comment.deleteMany({ id: { $in: removeComments } });
      res.status(200).send(true);
    } catch (error) {
      console.log(error);
      res.status(400).send(false);
    }
  });

  /**
   * Creates a new command with the provided params
   */
  router.post('/create', (req: Request, res: Response) => {
    const requestBody = req.body;
    let comment = new Comment(requestBody);
    comment.id = comment._id;
    comment
      .save()
      .then(() => res.status(200).send(true))
      .catch(() => res.status(400).send(false));
  });

  return router;
};
