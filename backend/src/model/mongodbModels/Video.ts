import mongoose, { Model, Schema } from 'mongoose';
import { ITagType } from './Tag';
import { ICategoryType } from './Category';

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
    userId: string;
    userImagePath: string;
    userName: string;
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
  upload: {
    userId: String,
    userName: String,
    uploadTime: String,
    userImagePath: String,
  },
  tags: [{ id: String, name: String, color: { red: Number, green: Number, blue: Number } }],
  categories: [{ id: String, name: String }],
});

export const Video: Model<IVideo> = mongoose.model<IVideo>('Video', VideoSchema);
