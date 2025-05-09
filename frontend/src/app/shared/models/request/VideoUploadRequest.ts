import { CategoryResponse } from '../response/CategoryResponse';
import { TagResponse } from '../response/TagResponse';

export interface VideoUploadRequest {
  videoPath: string;
  description: string;
  title: string;
  upload: {
    userId: string;
    userName: string;
    userImagePath: string;
  };
  tags: TagResponse[];
  categories: CategoryResponse[];
}
