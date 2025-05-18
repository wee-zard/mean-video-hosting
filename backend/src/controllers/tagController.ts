import { Request, Response } from 'express';
import { RootService } from '../services/rootService';
import { AuthenticateUser } from '../decorators/authDecorator';

export class TagController {
  /**
   * Fetches the list of tags from the server.
   */
  getTags(req: Request, res: Response): void {
    RootService.tagService
      .getTags()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }

  /**
   * Fetches the number of comments under the requested video.
   */
  @AuthenticateUser
  createTag(req: Request, res: Response): void {
    const name = req.query.name as string;
    RootService.tagService
      .createTag(name)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }
}
