import mongoose from 'mongoose';
import { IUser, User } from '../model/mongodbModels/User';
import { UserRegisterRequest } from '../model/request/UserRegisterRequest';

export default interface UserService {

  /**
   * Retrieves a user from the server based on the provided user id.
   *
   * @param userId the id of the user to retrieve.
   */
  getUserById(userId: string): Promise<mongoose.Document<unknown, {}, IUser> | null>;

  /**
   * Checks whether the provided content creator user is exists on the server or not.
   *
   * @param userId the id of the user to check.
   * @returns true if the user exists, else false.
   */
  isUserExists(userId: string): Promise<boolean>;

  /**
   * Logs the user into the application.
   */
  login(error: string | null, user: typeof User): Promise<boolean>;

  /**
   * Creates a new user.
   */
  register(request: UserRegisterRequest): Promise<IUser>;
}
