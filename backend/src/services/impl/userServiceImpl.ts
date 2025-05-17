import { IUser, User } from '../../model/mongodbModels/User';
import UserService from '../userService';
import { BaseResponse } from '../../model/response/BaseResponse';
import { UserRegisterRequest } from '../../model/request/UserRegisterRequest';
import { UserRoleEnum } from '../../model/enum/UserRoleEnum';
import { Document } from 'mongoose';
import RootDao from '../../dao/rootDao';

export default class UserServiceImpl implements UserService {
  /**
   * @inheritdoc
   */
  getUserById(userId: string): Promise<Document<unknown, {}, IUser> | null> {
    return RootDao.userDao.getUserById(userId);
  }

  /**
   * @inheritdoc
   */
  isUserExists(userId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      RootDao.userDao
        .getUserById(userId)
        .then(() => resolve(true))
        .catch(reject);
    });
  }

  /**
   * @inheritdoc
   */
  login(error: string | null, user: typeof User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (error) {
        const baseResponse: BaseResponse = { error: error };
        reject(baseResponse);
        return;
      }

      if (!user) {
        const baseResponse: BaseResponse = { error: 'User not found.' };
        reject(baseResponse);
        return;
      }

      resolve(true);
    });
  }

  /**
   * @inheritdoc
   */
  register(request: UserRegisterRequest): Promise<IUser> {
    return new Promise((resolve, reject) => {
      const user = new User({
        email: request.email,
        password: request.password,
        username: request.username,
        userRole: UserRoleEnum.NORMAL_USER,
        birthDate: request.birthdate,
        registrationTime: new Date().toISOString(),
      });
      user.id = user._id;
      user.save().then(resolve).catch(reject);
    });
  }
}
