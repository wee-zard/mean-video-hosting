import mongoose from 'mongoose';
import { loadFlywayMigrations } from '../mongodb/mongodb-flyway';

const dbUrl = 'mongodb://localhost:27017/mean-db';

/**
 * Connect to the mongodb in docker.
 */
export const configureMongooseMiddleware = (): void => {
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
};
