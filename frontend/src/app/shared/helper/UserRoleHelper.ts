import { UserModel, UserRoleEnum } from '../models/models/UserModels';

export const isContentCreatorOrAdmin = (user?: UserModel): boolean => {
  const acceptedRoles = [
    UserRoleEnum.CONTENT_CREATOR_USER,
    UserRoleEnum.ADMIN_USER,
  ];
  return !!user && acceptedRoles.includes(user.userRole);
};
