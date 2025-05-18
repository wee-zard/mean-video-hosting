import { Router } from 'express';
import { TagController } from '../../controllers/tagController';

export default class TagRoutes {
  constructor(
    private router: Router = Router(),
    private controller: TagController = new TagController()
  ) {}

  getRoutes(): Router {
    this.router.get('/', this.controller.getTags);
    this.router.post('/', this.controller.createTag);

    return this.router;
  }
}
