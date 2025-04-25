import { Router, Request, Response, NextFunction } from 'express';
import { MainClass } from '../../main-class';
import { PassportStatic } from 'passport';
import { User } from '../../model/mongodbModels/User';

export const configureUserRoutes = (passport: PassportStatic): Router => {
  const router = Router();

  // TODO: Remove later
  router.get('/', (req: Request, res: Response) => {
    let myClass = new MainClass();
    res.status(200).send('Hello, World!');
  });

  router.get('/callback', (req: Request, res: Response) => {
    let myClass = new MainClass();
    myClass.monitoringCallback((error, result) => {
      if (error) {
        res.write(error);
        res.status(400).end();
      } else {
        res.write(result);
        res.status(200).end();
      }
    });
  });

  router.get('/promise', async (req: Request, res: Response) => {
    let myClass = new MainClass();
    /* myClass.monitoringPromise().then((data: string) => {
                res.write(data);
                res.status(200).end();
            }).catch((error: string) => {
                res.write(error);
                res.status(400).end();
            }); */

    // async-await
    try {
      const data = await myClass.monitoringPromise();
      res.write(data);
      res.status(200).end();
    } catch (error) {
      res.write(error);
      res.status(400).end();
    }
  });

  router.get('/observable', (req: Request, res: Response) => {
    let myClass = new MainClass();
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    // deprecated variant
    /* myClass.monitoringObservable().subscribe((data) => {
                console.log(data);
            }, (error) => {
                console.log(error);
            }, () => {
                console.log('complete');
            }); */

    myClass.monitoringObservable().subscribe({
      next(data: string) {
        res.write(data);
      },
      error(error: string) {
        res.status(400).end(error);
      },
      complete() {
        res.status(200).end();
      },
    });
  });

  router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (error: string | null, user: typeof User) => {
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else {
        if (!user) {
          res.status(400).send('User not found.');
        } else {
          req.login(user, (err: string | null) => {
            if (err) {
              console.log(err);
              res.status(500).send('Internal server error.');
            } else {
              res.status(200).send(user);
            }
          });
        }
      }
    })(req, res, next);
  });

  router.post('/register', (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({ email: email, password: password });
    user
      .save()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  router.post('/logout', (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
      req.logout((error) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error.');
        }
        res.status(200).send('Successfully logged out.');
      });
    } else {
      res.status(500).send('User is not logged in.');
    }
  });

  return router;
};
