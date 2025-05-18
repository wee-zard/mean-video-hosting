import RootDao from '../../dao/rootDao';
import { ITag } from '../../model/mongodbModels/Tag';
import TagService from '../tagService';

export class TagServiceImpl implements TagService {
  /**
   * @inheritdoc
   */
  getTags(): Promise<ITag[]> {
    return RootDao.tagDao.getTags();
  }

  /**
   * @inheritdoc
   */
  createTag(name: string): Promise<boolean> {
    return RootDao.tagDao.createTag(name);
  }
}
