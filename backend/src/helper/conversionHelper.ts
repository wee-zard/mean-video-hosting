import { Video } from './../model/mongodbModels/Video';
import { VideoUploadRequest } from '../model/request/VideoUploadRequest';

export const convertVideoUploadRequestToVideo = (data: VideoUploadRequest, videoId: string) => {
  // Create a new video record.
  const videoModel = new Video({
    viewCount: 0,
    videoUrlPath: `https://www.youtube.com/embed/${videoId}`,
    description: data.description,
    title: data.title,
    rating: { numberOfLikes: 0, numberOsfDislikes: 0 },
    upload: {
      userId: data.upload.userId,
      userName: data.upload.userName,
      uploadTime: new Date(Date.now()).toISOString(),
      userImagePath: data.upload.userImagePath,
    },
    tags: data.tags,
    categories: data.categories,
  });
  videoModel.id = videoModel._id;

  return videoModel;
};
