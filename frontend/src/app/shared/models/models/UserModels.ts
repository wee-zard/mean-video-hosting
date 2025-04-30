export interface UserModel {
  id: string;
  email: string;
  password: string;
  username: string;
  userRole: UserRoleEnum;
  birthDate: string;
  registrationTime: string;
  videoRatings: VideoRatingType[];
  profilePicturePath?: string;
  phoneNumber?: string;
}

export enum UserRoleEnum {
  NORMAL_USER = 'Normal',
  ADMIN_USER = 'Admin',
  CONTENT_CREATOR_USER = 'Content Creator',
}

type VideoRatingType = {
  videoId: string;
  isLiked: boolean;
};
