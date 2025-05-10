import { Router } from 'express';
import { CommentController } from '../../controllers/commentController';

export default class CommentRoutes {
  constructor(
    private router: Router = Router(),
    private commentController: CommentController = new CommentController()
  ) {}

  getRoutes(): Router {
    this.router.get('/', this.commentController.getCommentsByVideoId);
    this.router.delete('/', this.commentController.deleteCommentById);
    this.router.post('/create', this.commentController.createComment);
    this.router.post('/update', this.commentController.updateComment);
    this.router.post('/hide', this.commentController.hideComment);

    return this.router;
  }
}
