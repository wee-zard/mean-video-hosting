import mongoose, { Model, Schema } from 'mongoose';
import { TagColorType } from '../types/TagColorType';

export type ITagType = {
  id: string;
  name: string;
  color: TagColorType;
};

export interface ITag extends Document, ITagType {}

const TagSchema: Schema<ITag> = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  color: { red: Number, green: Number, blue: Number },
});

export const Tag: Model<ITag> = mongoose.model<ITag>('Tag', TagSchema);
