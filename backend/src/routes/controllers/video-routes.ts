import { Router, Request, Response } from 'express';
import { VideoSearchRequest } from '../../model/request/VideoSearchRequest';
import { Video } from '../../model/mongodbModels/Video';

export const configureVideoRoutes = (): Router => {
  const router = Router();

  router.get('/is-exists', (req: Request, res: Response) => {
    const query = Video.find({ id: req.query.video_id });
    query
      .then((result) => res.status(200).send(result.length > 0))
      .catch(() => res.status(400).send(false));
  });

  /**
   * List the videos from the server and filter them based on the provided filter terms
   */
  router.get('/search', (req: Request, res: Response) => {
    const searchTerms: VideoSearchRequest = {
      searchByText: req.query.text as string,
      searchByTagId: req.query.tag_id as string,
      searchByCategoryId: req.query.category_id as string,
    };

    let filterQuery = { title: { $regex: searchTerms.searchByText, $options: 'i' } };

    if (searchTerms.searchByTagId) {
      filterQuery = {
        ...{
          ...filterQuery,
          'tags.id': searchTerms.searchByTagId,
        },
      };
    }

    if (searchTerms.searchByCategoryId) {
      filterQuery = {
        ...{
          ...filterQuery,
          'categories.id': searchTerms.searchByCategoryId,
        },
      };
    }

    const query = Video.find(filterQuery);
    query.then((result) => res.status(200).send(result)).catch(() => res.status(400).send([]));
  });

  return router;
};
