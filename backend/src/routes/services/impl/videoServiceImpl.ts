import { IVideo, Video } from '../../../model/mongodbModels/Video';
import VideoService from '../videoService';

export default class VideoServiceImpl implements VideoService {
  /**
   * @inheritdoc
   */
  findVideoById(videoId: string): Promise<IVideo> {
    return new Promise((resolve, reject) => {
      const query = Video.findOne({ id: videoId });
      query.then((result) => resolve(result as IVideo)).catch(reject);
    });
  }

  /**
   * @inheritdoc
   */
  incrementViewCountOfVideoWithOneByVideoId(videoId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const query = Video.updateOne({ id: videoId }, { $inc: { viewCount: 1 } });
      query.then(() => resolve(true)).catch(reject);
    });
  }
}
