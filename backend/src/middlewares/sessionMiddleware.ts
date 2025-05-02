import expressSession from 'express-session';

export const configureSessionMiddleware = () => {
  // Add sessions
  const sessionOptions: expressSession.SessionOptions = {
    secret: 'myveryownsecret',
    resave: false,
    saveUninitialized: false,
  };

  return expressSession(sessionOptions);
};
