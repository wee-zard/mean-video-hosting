import VideoService from '../services/videoService';
import VideoServiceImpl from '../services/impl/videoServiceImpl';
import { Router, Request, Response, response } from 'express';
import { VideoSearchRequest } from '../../model/request/VideoSearchRequest';
import { IVideoType, Video } from '../../model/mongodbModels/Video';
import { IUser, User } from '../../model/mongodbModels/User';
import { BaseResponse } from '../../model/response/BaseResponse';

export const configureVideoRoutes = (): Router => {
  const router = Router();
  const videoService: VideoService = new VideoServiceImpl();

  /**
   * Finds a video by the id of the video.
   */
  router.get('/', (req: Request, res: Response) => {
    const videoId = req.query.video_id as string;
    videoService
      .findVideoById(videoId)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  });

  /**
   * Updates the view count of a video by 1.
   */
  router.get('/', (req: Request, res: Response) => {
    const videoId = req.query.video_id as string;
    videoService
      .incrementViewCountOfVideoWithOneByVideoId(videoId)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  });

  /**
   * Get the list of videos what a specific user uploaded so far to the server.
   */
  router.get('/chanel-videos', (req: Request, res: Response) => {
    const query = Video.find({ 'upload.userId': req.query.user_id });
    query.then((result) => res.status(200).send(result)).catch(() => res.status(400).send([]));
  });

  router.get('/is-exists', (req: Request, res: Response) => {
    const query = Video.find({ id: req.query.video_id });
    query
      .then((result) => res.status(200).send(result.length > 0))
      .catch(() => res.status(400).send(false));
  });

  /**
   * Update the rating of a video made by a user.
   */
  router.post('/update-rating', async (req: Request, res: Response) => {
    const isLiked: boolean | undefined = req.body.is_liked;
    const videoId: string | undefined = req.body.video_id;
    const userId: string | undefined = req.body.user_id;

    if (!videoId) {
      const baseResponse: BaseResponse = { error: 'Video Id is not provided!' };
      res.status(400).send(baseResponse);
      return;
    }

    if (!userId) {
      const baseResponse: BaseResponse = { error: 'User Id is not provided!' };
      res.status(400).send(baseResponse);
      return;
    }

    const foundVideo: IVideoType = (await Video.findOne({ id: videoId })) as any;

    if (!foundVideo) {
      const baseResponse: BaseResponse = { error: 'Video not found!' };
      res.status(400).send(baseResponse);
      return;
    }

    let changedRating = foundVideo.rating;
    let foundUser: IUser = (await User.findOne({ id: userId })) as any;

    if (!foundUser) {
      const baseResponse: BaseResponse = { error: 'User not found!' };
      res.status(400).send(baseResponse);
      return;
    }

    if (!foundUser.videoRatings) {
      foundUser.videoRatings = [];
    }

    let userVideoRating = foundUser.videoRatings.find((rating) => rating.videoId === videoId);

    if (isLiked === undefined) {
      if (userVideoRating === undefined) {
        const baseResponse: BaseResponse = { error: 'Rating is not provided!' };
        res.status(400).send(baseResponse);
        return;
      } else if (userVideoRating.isLiked) {
        foundUser.videoRatings = [
          ...foundUser.videoRatings.filter((rating) => rating.videoId !== videoId),
        ];
        changedRating.numberOfLikes--;
      } else {
        foundUser.videoRatings = [
          ...foundUser.videoRatings.filter((rating) => rating.videoId !== videoId),
        ];
        changedRating.numberOsfDislikes--;
      }
      // The user 'liked' the video
    } else if (isLiked) {
      // a 'like' is not saved on the side of the user
      if (userVideoRating === undefined) {
        const newRating = {
          videoId: videoId,
          isLiked: isLiked,
        };
        foundUser.videoRatings = [...foundUser.videoRatings, newRating];
        changedRating.numberOfLikes++;
        // a 'like' is already saved on the user side. -> error
      } else if (userVideoRating.isLiked) {
        const baseResponse: BaseResponse = { error: 'Rating cannot be modified!' };
        res.status(400).send(baseResponse);
        return;
        // a 'dislike' is already saved on the user side. -> change it to 'like'
      } else {
        // Update the user video ratings
        foundUser.videoRatings = [
          ...foundUser.videoRatings.map((rating) => ({
            videoId: rating.videoId,
            isLiked: rating.videoId === videoId ? isLiked : rating.isLiked,
          })),
        ];
        changedRating.numberOfLikes++;
        changedRating.numberOsfDislikes--;
      }
    } else {
      if (userVideoRating === undefined) {
        const newRating = {
          videoId: videoId,
          isLiked: isLiked,
        };
        foundUser.videoRatings = [...foundUser.videoRatings, newRating];
        changedRating.numberOsfDislikes++;
      } else if (userVideoRating.isLiked) {
        // Update the user video ratings
        foundUser.videoRatings = [
          ...foundUser.videoRatings.map((rating) => ({
            videoId: rating.videoId,
            isLiked: rating.videoId === videoId ? isLiked : rating.isLiked,
          })),
        ];
        changedRating.numberOfLikes--;
        changedRating.numberOsfDislikes++;
      } else {
        const baseResponse: BaseResponse = { error: 'Rating cannot be modified!' };
        res.status(400).send(baseResponse);
        return;
      }
    }

    const query = Video.updateOne({ id: videoId }, { $set: { rating: changedRating } });
    query
      .then(() => {
        const query1 = User.updateOne(
          { id: userId },
          { $set: { videoRatings: foundUser.videoRatings } }
        );
        query1.then(() => res.status(200).send(true)).catch(() => res.status(400).send(false));
      })
      .catch(() => res.status(400).send(false));
  });

  /**
   * List the videos from the server and filter them based on the provided filter terms
   */
  router.get('/search', (req: Request, res: Response) => {
    const searchTerms: VideoSearchRequest = {
      text: req.query.text as string,
      tag: req.query.tag_id as string,
      category: req.query.category_id as string,
    };

    let filterQuery = { title: { $regex: searchTerms.text, $options: 'i' } };

    if (searchTerms.tag) {
      filterQuery = {
        ...{
          ...filterQuery,
          'tags.id': searchTerms.tag,
        },
      };
    }

    if (searchTerms.category) {
      filterQuery = {
        ...{
          ...filterQuery,
          'categories.id': searchTerms.category,
        },
      };
    }

    const query = Video.find(filterQuery);
    query.then((result) => res.status(200).send(result)).catch(() => res.status(400).send([]));
  });

  /**
   * Get a list of random videos.
   */
  router.get('/list-random', (req: Request, res: Response) => {
    const query = Video.aggregate([
      { $addFields: { randomField: { $rand: {} } } },
      { $sort: { randomField: 1 } },
      { $limit: 6 },
    ]);
    query
      .then((result: IVideoType[]) => {
        const filteredList = result
          .filter((video) => video.id !== req.query.id)
          .filter((_, index) => index < 5);
        res.status(200).send(filteredList);
      })
      .catch(() => res.status(400).send([]));
  });

  return router;
};
