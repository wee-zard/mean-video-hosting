import mongoose from 'mongoose';
import { IUser, User } from '../model/mongodbModels/User';

export default class UserDao {
  /**
   * Retrieves a user from the server based on the provided user id.
   *
   * @param userId the id of the user to retrieve.
   */
  getUserById(userId: string): Promise<mongoose.Document<unknown, {}, IUser> | null> {
    return new Promise((resolve, reject) => {
      const query = User.findOne({
        id: userId,
      });
      query.then((data) => resolve(data)).catch(reject);
    });
  }
}
