import { IVideo } from '../model/mongodbModels/Video';
import { VideoUpdateRequest } from '../model/request/VideoUpdateRequest';

export default interface VideoService {
  /**
   * Updates the video's title and description
   *
   * @param request The request that holds the updated properties of the video
   * @Returns Returns true if the process of the update finished successfully.
   */
  updateVideo(request: VideoUpdateRequest): Promise<boolean>;

  /**
   * Deletes a video by id.
   *
   * @param videoId the id of the video the delete
   * @Returns Returns true if the process of the update finished successfully.
   */
  deleteById(videoId: string): Promise<boolean>;

  /**
   * Finds a video by the id of the video.
   *
   * @param videoId the id of the video the search for.
   * @returns Returns a video model
   */
  findVideoById(videoId: string): Promise<IVideo>;

  /**
   * Updates the view count of a video by 1.
   *
   * @param videoId The video to update.
   * @Returns Returns true if the process of the update finished successfully.
   */
  incrementViewCountOfVideoWithOneByVideoId(videoId: string): Promise<boolean>;

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
    change?: number
  ): Promise<boolean>;
}
