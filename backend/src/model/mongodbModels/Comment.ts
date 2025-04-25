import mongoose, { Model, Schema } from 'mongoose';

export type ICommentsTYpe = {
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
};

interface IComment extends Document, ICommentsTYpe {}

const CommentSchema: Schema<IComment> = new mongoose.Schema({
  id: { type: String, required: true },
  message: { type: String, required: true },
  lastModification: { type: String, required: true },
  replyId: { type: String },
  user: { userId: String, userName: String, profilePicturePath: String },
  videoId: { type: String, required: true },
});

export const Comment: Model<IComment> = mongoose.model<IComment>('Comment', CommentSchema);
