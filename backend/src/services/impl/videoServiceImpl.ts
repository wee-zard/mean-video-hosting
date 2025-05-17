import RootDao from '../../dao/rootDao';
import { IVideo } from '../../model/mongodbModels/Video';
import { VideoUpdateRequest } from '../../model/request/VideoUpdateRequest';
import VideoService from '../videoService';

export default class VideoServiceImpl implements VideoService {
  /**
   * @inheritdoc
   */
  updateVideo(request: VideoUpdateRequest): Promise<boolean> {
    return RootDao.videoDao.updateVideo(request);
  }

  /**
   * @inheritdoc
   */
  deleteById(videoId: string): Promise<boolean> {
    return RootDao.videoDao.deleteById(videoId);
  }

  /**
   * @inheritdoc
   */
  findVideoById(videoId: string): Promise<IVideo> {
    return RootDao.videoDao.findVideoById(videoId);
  }

  /**
   * @inheritdoc
   */
  incrementViewCountOfVideoWithOneByVideoId(videoId: string): Promise<boolean> {
    return RootDao.videoDao.incrementViewCountOfVideoWithOneByVideoId(videoId);
  }

  /**
   * @inheritdoc
   */
  changeCommentNumberOfVideo(
    videoId: string,
    isIncrement: boolean,
    change?: number
  ): Promise<boolean> {
    return RootDao.videoDao.changeCommentNumberOfVideo(videoId, isIncrement, change);
  }
}
