import { IVideo, Video } from '../model/mongodbModels/Video';
import { VideoUpdateRequest } from '../model/request/VideoUpdateRequest';

export default class VideoDao {
  /**
   * Updates the video's title and description
   *
   * @param request The request that holds the updated properties of the video
   * @Returns Returns true if the process of the update finished successfully.
   */
  updateVideo(request: VideoUpdateRequest): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Video.updateOne({ id: request.id }, [
        { $set: { title: request.title, description: request.description } },
      ])
        .then(() => resolve(true))
        .catch(reject);
    });
  }

  /**
   * Deletes a video by id.
   *
   * @param videoId the id of the video the delete
   * @Returns Returns true if the process of the update finished successfully.
   */
  deleteById(videoId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const query = Video.deleteOne({ id: videoId });
      query.then((result) => resolve(true)).catch(reject);
    });
  }

  /**
   * Finds a video by the id of the video.
   *
   * @param videoId the id of the video the get by.
   * @returns Returns a video model
   */
  findVideoById(videoId: string): Promise<IVideo> {
    return new Promise((resolve, reject) => {
      const query = Video.findOne({ id: videoId });
      query.then((result) => resolve(result as IVideo)).catch(reject);
    });
  }

  /**
   * Updates the view count of a video by 1.
   *
   * @param videoId The video to update.
   * @Returns Returns true if the process of the update finished successfully.
   */
  incrementViewCountOfVideoWithOneByVideoId(videoId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const query = Video.updateOne({ id: videoId }, { $inc: { viewCount: 1 } });
      query.then(() => resolve(true)).catch(reject);
    });
  }

  /**
   * Updates the comment numbers under a video
   *
   * @param videoId The video to update.
   * @param isIncrement Determines whether the value needs to be incremented or not.
   * @Returns Returns true if the process of the update finished successfully.
   */
  changeCommentNumberOfVideo(
    videoId: string,
    isIncrement: boolean,
    change: number = 1
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const query = Video.updateOne(
        { id: videoId },
        { $inc: { numberOfComments: isIncrement ? change : -change } }
      );
      query.then(() => resolve(true)).catch(reject);
    });
  }
}
