import { ITag } from '../model/mongodbModels/Tag';

export default interface TagService {
  /**
   * Fetches the list of tags from the server.
   *
   * @Returns Returns the list of tags from the server.
   */
  getTags(): Promise<ITag[]>;

  /**
   * Creates a new tag.
   *
   * @param name The name of the new tag to create
   * @Returns Returns true if the process of the update finished successfully.
   */
  createTag(name: string): Promise<boolean>;
}
