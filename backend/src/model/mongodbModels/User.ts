import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserRoleEnum } from '../enum/UserRoleEnum';
import { VideoRatingType } from '../types/VideoRatingType';

const SALT_FACTOR = 10;

export interface IUser extends Document {
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
  comparePassword: (
    candidatePassword: string,
    callback: (error: Error | undefined, isMatch: boolean) => void
  ) => void;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  id: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String },
  userRole: { type: String },
  birthDate: { type: String },
  registrationTime: { type: String },
  videoRatings: [{ videoId: String, isLiked: Boolean }],
  profilePicturePath: { type: String },
  phoneNumber: { type: String },
});

// hook
UserSchema.pre<IUser>('save', function (next) {
  const user = this;

  // hash password
  bcrypt.genSalt(SALT_FACTOR, (error, salt) => {
    if (error) {
      return next(error);
    }
    bcrypt.hash(user.password, salt, (err, encrypted) => {
      if (err) {
        return next(err);
      }
      user.password = encrypted;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (
  candidatePassword: string,
  callback: (error: Error | undefined, isMatch: boolean) => void
): void {
  const user = this;
  bcrypt.compare(candidatePassword, user.password, callback);
};

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
