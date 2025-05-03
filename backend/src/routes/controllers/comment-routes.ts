import { Router, Request, Response } from 'express';
import { Comment } from '../../model/mongodbModels/Comment';

export const configureCommentRoutes = (): Router => {
  const router = Router();

  /**
   * Fetch the list of comments related to a video
   */
  router.get('/', (req: Request, res: Response) => {
    const query = Comment.find({ videoId: req.query.video_id });
    query.then((result) => res.status(200).send(result)).catch(() => res.status(400).send([]));
  });

  return router;
};
