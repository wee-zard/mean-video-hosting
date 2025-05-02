import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { configureRoutesMiddleware } from './routes/routes';
import { configurePassportMiddleware } from './middlewares/passportMiddleware';
import { configureMongooseMiddleware } from './middlewares/mongooseMiddleware';
import { configureCorsMiddleware } from './middlewares/corsMiddleware';
import { configureSessionMiddleware } from './middlewares/sessionMiddleware';

const app = express();
const port = 8081;

// Middleware to connect to the mongodb in docker.
configureMongooseMiddleware();

// Add cors to the server
app.use(configureCorsMiddleware());

// Add bodyParser
app.use(bodyParser.json());

// Add cookieParser
app.use(cookieParser());

// Add sessions
app.use(configureSessionMiddleware());

// Add passport
app.use(passport.initialize());
app.use(passport.session());
configurePassportMiddleware(passport);

// Add routes
app.use('/app', configureRoutesMiddleware(passport));

// Make the backend listening on a specific port.
app.listen(port, function check(error) {
  if (error) console.log(`Error while listening on port ${port}!`, error);
  else console.log(`App listening on port ${port} http://localhost:${port}/api/user`);
});
