import express from 'express';
import expressSession from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import mongoose from 'mongoose';
import { configureRoutes } from './routes/routes';
import { loadFlywayMigrations } from './mongodb/mongodb-flyway';
import cors from 'cors';
import { configurePassport } from './passport/passport';

const app = express();
const port = 8081;
const dbUrl = 'mongodb://localhost:27017/mean-db';

// Connecting to the mongodb in docker
mongoose
  .connect(dbUrl)
  .then((_) => {
    console.log('Successfully connected to MongoDB.');

    loadFlywayMigrations();
  })
  .catch((error) => {
    console.log('Unexpected error occurred while connecting to MongoDB.', error);
    return;
  });

// Add cors to the server
const whitelist = ['*', 'http://localhost:4200'];
const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allowed?: boolean) => void
  ) => {
    if (whitelist.indexOf(origin!) !== -1 || whitelist.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// Add bodyParser
app.use(bodyParser.json());

// Add cookieParser
app.use(cookieParser());

// Add sessions
const sessionOptions: expressSession.SessionOptions = {
  secret: 'myveryownsecret',
  resave: false,
  saveUninitialized: false,
};
app.use(expressSession(sessionOptions));

// Add passport
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport);

// Add routes
app.use('/app', configureRoutes(passport));

// Make the backend listening on a specific port.
app.listen(port, function check(error) {
  if (error) console.log(`Error while listening on port ${port}!`, error);
  else console.log(`App listening on port ${port} http://localhost:${port}/api/user`);
});
