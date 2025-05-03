import { Router, Request, Response, NextFunction } from 'express';
import { PassportStatic } from 'passport';
import { User } from '../../model/mongodbModels/User';
import { UserRoleEnum } from '../../model/enum/UserRoleEnum';
import { BaseResponse } from '../../model/response/BaseResponse';

export const configureUserRoutes = (passport: PassportStatic): Router => {
  const router = Router();

  /**
   * Checks whether the provided content creator user is exists on the server or not.
   */
  router.get('/is-exists', (req: Request, res: Response) => {
    const query = User.findOne({
      id: req.query.user_id,
      userRole: UserRoleEnum.CONTENT_CREATOR_USER,
    });
    query.then(() => res.status(200).send(true)).catch(() => res.status(400).send(false));
  });

  /**
   * Logs the user into the application.
   */
  router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (error: string | null, user: typeof User) => {
      if (error) {
        const baseResponse: BaseResponse = { error: error };
        res.status(400).send(baseResponse);
        return;
      }

      if (!user) {
        const baseResponse: BaseResponse = { error: 'User not found.' };
        res.status(400).send(baseResponse);
        return;
      }

      req.login(user, (err: string | null) => {
        if (err) {
          const baseResponse: BaseResponse = { error: 'Internal server error.' };
          res.status(400).send(baseResponse);
          return;
        }
        res.status(200).send(user);
      });
    })(req, res, next);
  });

  /**
   * Creates a new user.
   */
  router.post('/register', (req: Request, res: Response) => {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      userRole: UserRoleEnum.NORMAL_USER,
      birthDate: req.body.birthdate,
      registrationTime: new Date().toISOString(),
    });
    user.id = user._id;

    user
      .save()
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(400).send(error));
  });

  /**
   * Logout the logged in user from the server and sever the session.
   */
  router.get('/logout', (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
      const baseResponse: BaseResponse = { error: 'User is not logged in.' };
      res.status(400).send(baseResponse);
      return;
    }

    req.logout((error) => {
      if (error) {
        const baseResponse: BaseResponse = { error: 'Internal server error.' };
        res.status(400).send(baseResponse);
      } else {
        const baseResponse: BaseResponse = { message: 'Successfully logged out.' };
        res.status(200).send(baseResponse);
      }
    });
  });

  /**
   * Checks whether the user is authenticated or not.
   */
  router.get('/checkAuth', (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
      res.status(200).send(true);
    } else {
      res.status(400).send(false);
    }
  });

  return router;
};
