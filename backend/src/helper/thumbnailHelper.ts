import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import VideoUploadHelper from './videoUploadHelper';

export default class ThumbnailHelper {
  /**
   * Generate a thumbnail for the uploaded video
   * @param videoPath
   * @param thumbnailPath
   */
  public static generateThumbnail(videoPath: string, thumbnailPath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      ffmpeg(videoPath)
        .on('end', () => {
          console.log('Thumbnail generated successfully');
          resolve();
        })
        .on('error', (err) => {
          console.error('Error generating thumbnail:', err);
          reject(err);
        })
        .screenshots({
          count: 1,
          folder: path.dirname(thumbnailPath),
          filename: path.basename(thumbnailPath),
        });
    });
  }

  public static getThumbnailPathByVideoName(videoName: string): string {
    const videoUrlPath = VideoUploadHelper.getVideoPathByVideoName(videoName);
    return videoUrlPath.replace('.mp4', '.img').replace('video_', 'image_');
  }
}
