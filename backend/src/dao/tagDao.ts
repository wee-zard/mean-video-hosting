import { ITag, Tag } from '../model/mongodbModels/Tag';

export default class TagDao {
  /**
   * Fetches the list of tags from the server.
   *
   * @Returns Returns the list of tags from the server.
   */
  getTags(): Promise<ITag[]> {
    return Tag.find();
  }

  /**
   * Creates a new tag.
   *
   * @param name The name of the new tag to create
   * @Returns Returns true if the process of the update finished successfully.
   */
  createTag(name: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const tag = new Tag({
        name: name,
        color: {
          red: 0,
          green: 0,
          blue: 0,
        },
      });
      tag.id = tag._id;

      return tag
        .save()
        .then(() => resolve(true))
        .catch(reject);
    });
  }
}
