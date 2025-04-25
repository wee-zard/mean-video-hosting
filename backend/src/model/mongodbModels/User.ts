import mongoose, { Document, Model, ObjectId, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserRoleEnum } from '../enum/UserRoleEnum';

const SALT_FACTOR = 10;

type VideoRatingType = {
  videoId: string;
  isLiked: boolean;
};

interface IUser extends Document {
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
    callback: (error: Error | null, isMatch: boolean) => void
  ) => void;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  userRole: { type: String, required: true },
  birthDate: { type: String, required: true },
  registrationTime: { type: String, required: true },
  profilePicturePath: { type: String, required: false },
  phoneNumber: { type: String, required: false },
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
  callback: (error: Error | null, isMatch: boolean) => void
): void {
  const user = this;
  bcrypt.compare(candidatePassword, user.password, (error, isMatch) =>
    callback(error ?? null, error ? false : isMatch)
  );
};

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
