import { UserRoleEnums } from '../enums/UserRoleEnums';

export const isUserLoggedIn = (userRole: UserRoleEnums) => {
  return userRole !== UserRoleEnums.NOT_LOGGED_IN_USER;
};
