import { Router } from 'express';
import { PassportStatic } from 'passport';
import { configureUserRoutes } from './controllers/user-routes';

export const configureRoutes = (passport: PassportStatic): Router => {
  const router = Router();

  router.use('/user', configureUserRoutes(passport));

  return router;
};
