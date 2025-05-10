import { IUser, User } from '../model/mongodbModels/User';
import { UserRegisterRequest } from '../model/request/UserRegisterRequest';

export default interface UserService {
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
