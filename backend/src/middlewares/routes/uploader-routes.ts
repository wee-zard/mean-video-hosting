import { Router, Request, Response } from 'express';
import VideoUploadHelper from '../../helper/videoUploadHelper';
import { upload } from '../..';
import { VideoUploadRequest } from '../../model/request/VideoUploadRequest';
import { convertVideoUploadRequestToVideo } from '../../helper/conversionHelper';
import ThumbnailHelper from '../../helper/thumbnailHelper';

export const configureUploaderRoutes = (): Router => {
  const router = Router();

  // Init OAuth2 Client
  VideoUploadHelper.initOauth2Client();

  /**
   * Uploads the provided video to the express server, and stores it in a local directory.
   * The endpoint will returns the name of the file if the request was processed successfully.
   */
  router.post('/upload-to-express', upload.single('file'), (req: Request, res: Response) => {
    if (!req.file) {
      res.status(400).send('The video could not get uploaded to the server!');
      return;
    }
    res.status(200).send(req.file);
    /*
    const videoNamePath = VideoUploadHelper.getVideoPathByVideoName(req.file.filename);
    const thumbnailNamePath = ThumbnailHelper.getThumbnailPathByVideoName(videoNamePath);

    // Upload thumbnail here with the knowledge of the uploaded video
    ThumbnailHelper.generateThumbnail(videoNamePath, thumbnailNamePath)
      .then(() => res.status(200).send(req.file))
      .catch((error) => res.status(400).send(error));
      */
  });

  /**
   * Based on the provided data, upload a video to youtube.
   */
  router.post('/upload-to-youtube', async (req: Request, res: Response) => {
    const request: VideoUploadRequest = req.body;

    // Upload

    try {
      // Upload the new video to youtube.
      const videoId = await VideoUploadHelper.uploadVideoRoot(request);

      // Create a new video record to save on the mongodb.
      const videoRecord = convertVideoUploadRequestToVideo(request, videoId);

      // Save the new video record.
      await videoRecord.save();

      // Remove the uploaded video from the express server.
      await VideoUploadHelper.removeVideoFromPublicFolder(request.videoPath);

      res.status(200).send(true);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  return router;
};
