import { PassportStatic } from 'passport';
import { IStrategyOptions, Strategy } from 'passport-local';
import { User } from '../model/mongodbModels/User';

const iStrategyOption: IStrategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
};

export const configurePassport = (passport: PassportStatic): PassportStatic => {
  passport.serializeUser((user: Express.User, done) => done(null, user));

  passport.deserializeUser((user: Express.User, done) => done(null, user));

  passport.use(
    'local',
    new Strategy(iStrategyOption, (email, password, done) => {
      const query = User.findOne({ email: email });
      query
        .then((user) => {
          if (!user) {
            done(null, undefined);
            return;
          }

          user.comparePassword(password, (_, isMatch) =>
            done(!isMatch ? 'Incorrect username or password.' : null, !isMatch ? undefined : user)
          );
        })
        .catch((error) => done(error));
    })
  );

  return passport;
};
