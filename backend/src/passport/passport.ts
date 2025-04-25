import { PassportStatic } from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../model/mongodbModels/User';

export const configurePassport = (passport: PassportStatic): PassportStatic => {
  passport.serializeUser((user: Express.User, done) => {
    console.log('user is serialized.');
    done(null, user);
  });

  passport.deserializeUser((user: Express.User, done) => {
    console.log('user is deserialized.');
    done(null, user);
  });

  passport.use(
    'local',
    new Strategy((username, password, done) => {
      const query = User.findOne({ email: username });
      query
        .then((user) => {
          if (!user) {
            done(null, undefined);
            return;
          }

          user.comparePassword(password, (error, _) => {
            if (error) {
              done('Incorrect username or password.');
            } else {
              // TODO: done(null, user._id);
              done(null, user);
            }
          });
        })
        .catch((error) => done(error));
    })
  );

  return passport;
};
