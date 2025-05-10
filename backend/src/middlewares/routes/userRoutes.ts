import { Router, Request, Response, NextFunction } from 'express';
import { PassportStatic } from 'passport';
import { UserController } from '../../controllers/userController';

export default class UserRoutes {
  passport: PassportStatic;

  constructor(
    passport: PassportStatic,
    private router: Router = Router(),
    private userController: UserController = new UserController()
  ) {
    this.passport = passport;
  }

  getRoutes(): Router {
    this.router.get('/checkAuth', this.userController.checkAuth);
    this.router.get('/logout', this.userController.logout);
    this.router.post('/register', this.userController.register);
    this.router.get('/is-exists', this.userController.isUserExists);
    this.router.post('/login', (req: Request, res: Response, next: NextFunction) =>
      this.userController.login(req, res, next, this.passport)
    );

    return this.router;
  }
}
