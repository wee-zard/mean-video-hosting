import { IVideo } from '../model/mongodbModels/Video';

export default interface VideoService {
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
}
