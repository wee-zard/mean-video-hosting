import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IInitializer extends Document {
  name: string;
  finishedAt: string;
  isFinishedSuccessfully: boolean;
}

const InitializerSchema: Schema<IInitializer> = new mongoose.Schema({
  name: { type: String, required: true },
  finishedAt: { type: String, required: true },
  isFinishedSuccessfully: { type: Boolean, required: true },
});

export const Initializer: Model<IInitializer> = mongoose.model<IInitializer>(
  'Initializer',
  InitializerSchema
);
