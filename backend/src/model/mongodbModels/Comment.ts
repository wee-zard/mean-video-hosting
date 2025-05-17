import mongoose, { Model, Schema } from 'mongoose';
import { RootService } from '../../services/rootService';

export type ICommentsType = {
  id: string;
  message: string;
  lastModification: string;
  replyId: string | null;
  user: {
    userId: string;
    userName: string;
    profilePicturePath: string;
  };
  videoId: string;
  isHidden?: boolean;
};

export interface IComment extends Document, ICommentsType {}

const CommentSchema: Schema<IComment> = new mongoose.Schema({
  id: { type: String },
  message: { type: String, required: true },
  lastModification: { type: String, required: true },
  replyId: { type: String },
  user: { userId: String, userName: String, profilePicturePath: String },
  videoId: { type: String, required: true },
  isHidden: { type: Boolean, default: false },
});

CommentSchema.pre('save', function (next) {
  const comment = this;
  RootService.videoService
    .changeCommentNumberOfVideo(comment.videoId, true)
    .then(() => next())
    .catch(next);
});

export const Comment: Model<IComment> = mongoose.model<IComment>('Comment', CommentSchema);
