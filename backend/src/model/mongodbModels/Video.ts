import mongoose, { Model, Schema } from 'mongoose';
import { ITagType, Tag } from './Tag';
import { Category, ICategoryType } from './Category';

export type IVideoType = {
  id: string;
  viewCount: number;
  videoUrlPath: string;
  description: string;
  title: string;
  rating: {
    numberOfLikes: number;
    numberOsfDislikes: number;
  };
  upload: {
    uploadingUserId: string;
    uploadingUserName: string;
    uploadTime: string;
  };
  tags: ITagType[];
  categories: ICategoryType[];
};

interface IVideo extends Document, IVideoType {}

const VideoSchema: Schema<IVideo> = new mongoose.Schema({
  id: { type: String, required: true },
  viewCount: { type: Number, required: true },
  videoUrlPath: { type: String, required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  rating: { numberOfLikes: Number, numberOsfDislikes: Number },
  upload: { uploadingUserId: String, uploadingUserName: String, uploadTime: String },
  tags: [{ id: String, name: String, color: { red: Number, green: Number, blue: Number } }],
  categories: [{ id: String, name: String }],
});

export const Video: Model<IVideo> = mongoose.model<IVideo>('Video', VideoSchema);
