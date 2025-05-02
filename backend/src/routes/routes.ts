import { Router } from 'express';
import { PassportStatic } from 'passport';
import { configureUserRoutes } from './controllers/user-routes';
import { configureVideoRoutes } from './controllers/video-routes';

export const configureRoutesMiddleware = (passport: PassportStatic): Router => {
  const router = Router();

  router.use('/user', configureUserRoutes(passport));
  router.use('/video', configureVideoRoutes());

  return router;
};
