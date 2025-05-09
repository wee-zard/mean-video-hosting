import { ICategoryType } from '../mongodbModels/Category';
import { ITagType } from '../mongodbModels/Tag';

export interface VideoUploadRequest {
  videoPath: string;
  description: string;
  title: string;
  upload: {
    userId: string;
    userName: string;
    userImagePath: string;
  };
  tags: ITagType[];
  categories: ICategoryType[];
}
