import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { configureRoutesMiddleware } from './routes/routes';
import { configurePassportMiddleware } from './middlewares/passportMiddleware';
import { configureMongooseMiddleware } from './middlewares/mongooseMiddleware';
import { configureCorsMiddleware } from './middlewares/corsMiddleware';
import { configureSessionMiddleware } from './middlewares/sessionMiddleware';
import VideoUploadHelper from './helper/videoUploadHelper';
import multer from 'multer';

const app = express();
export const port = 8081;

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

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueVideoName = VideoUploadHelper.getFileName();
    cb(null, uniqueVideoName);
  },
});

export const upload = multer({ storage: storage });

// Add routes
app.use('/app', configureRoutesMiddleware(passport));

/**
 * Endpoint for the oauthclient when the google authentication of the user is finished successfully.
 */
app.get('/oauth2callback', (req: Request, res: Response) => {
  const code = req.query.code as string;

  console.log('oauth2callback called', code);
  VideoUploadHelper.handleOAth2ClientToken(code);

  res.status(200).send(true);
});

// Make the backend listening on a specific port.
app.listen(port, function check(error) {
  if (error) console.log(`Error while listening on port ${port}!`, error);
  else console.log(`App listening on port ${port} http://localhost:${port}/api/user`);
});
