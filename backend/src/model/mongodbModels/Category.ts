import mongoose, { Model, Schema } from 'mongoose';

export type ICategoryType = {
  id: string;
  name: string;
};

interface ICategory extends Document, ICategoryType {}

const CategorySchema: Schema<ICategory> = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

export const Category: Model<ICategory> = mongoose.model<ICategory>('Category', CategorySchema);
