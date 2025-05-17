import { NextFunction, Request, Response } from 'express';
import { RootService } from '../services/rootService';
import { PassportStatic } from 'passport';
import { User } from '../model/mongodbModels/User';
import { BaseResponse } from '../model/response/BaseResponse';
import { UserRegisterRequest } from '../model/request/UserRegisterRequest';
import { AuthenticateUser } from '../decorators/authDecorator';

export class UserController {
  /**
   * Based on the provided userId, retrieve the user from the server
   */
  getUserById(req: Request, res: Response): void {
    const userId = req.query.user_id as string;
    RootService.userService
      .getUserById(userId)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }

  /**
   * Fetch the list of comments related to a video
   */
  isUserExists(req: Request, res: Response): void {
    const userId = req.query.user_id as string;
    RootService.userService
      .isUserExists(userId)
      .then(() => res.status(200).send(true))
      .catch(() => res.status(400).send(false));
  }

  /**
   * Logs the user into the application.
   */
  login(req: Request, res: Response, next: NextFunction, passport: PassportStatic) {
    passport.authenticate('local', (error: string | null, user: typeof User) => {
      RootService.userService
        .login(error, user)
        .then(() => {
          req.login(user, (err: string | null) => {
            if (err) {
              const baseResponse: BaseResponse = { error: 'Internal server error.' };
              res.status(400).send(baseResponse);
              return;
            }
            res.status(200).send(user);
          });
        })
        .catch((error) => res.status(400).send(error));
    })(req, res, next);
  }

  /**
   * Creates a new user.
   */
  register(req: Request, res: Response): void {
    const request: UserRegisterRequest = req.body;
    RootService.userService
      .register(request)
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(400).send(error));
  }

  /**
   * Logout the logged in user from the server and sever the session.
   */
  @AuthenticateUser
  logout(req: Request, res: Response): void {
    req.logout((error) => {
      if (error) {
        const baseResponse: BaseResponse = { error: 'Internal server error.' };
        res.status(400).send(baseResponse);
      } else {
        const baseResponse: BaseResponse = { message: 'Successfully logged out.' };
        res.status(200).send(baseResponse);
      }
    });
  }

  /**
   * Checks whether the user is authenticated or not.
   */
  @AuthenticateUser
  checkAuth(req: Request, res: Response): void {
    res.status(200).send(true);
  }
}
