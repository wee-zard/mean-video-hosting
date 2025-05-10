import { Router } from 'express';
import { PassportStatic } from 'passport';
import CommentRoutes from './routes/commentRoutes';
import UserRoutes from './routes/userRoutes';
import { configureVideoRoutes } from './routes/video-routes';
import { configureUploaderRoutes } from './routes/uploader-routes';

export const configureRoutesMiddleware = (passport: PassportStatic): Router => {
  const router = Router();

  router.use('/video', configureVideoRoutes());
  router.use('/uploader', configureUploaderRoutes());
  router.use('/user', new UserRoutes(passport).getRoutes());
  router.use('/comment', new CommentRoutes().getRoutes());

  return router;
};
