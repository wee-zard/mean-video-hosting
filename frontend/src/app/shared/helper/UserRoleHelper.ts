import { UserModel, UserRoleEnum } from '../models/models/UserModels';
import { CommentResponse } from '../models/response/CommentResponse';

export const isVideoUploaderOrAdmin = (
  comment: CommentResponse,
  user?: UserModel,
): boolean => {
  return (
    !!user &&
    (user.userRole === UserRoleEnum.ADMIN_USER ||
      comment.user.userId === user.id)
  );
};
