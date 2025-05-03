import { CategoryResponse } from './CategoryResponse';
import { TagResponse } from './TagResponse';

export type VideoResponse = {
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
  tags: TagResponse[];
  categories: CategoryResponse[];
};
