import { IComment, ICommentsType } from '../model/mongodbModels/Comment';

export default interface CommentService {
  /**
   * Finds a list of comments by the id of the video.
   *
   * @param id the id of the video the search by.
   * @param Returns a list of comments.
   */
  getCommentsByVideoId(id: string): Promise<IComment[]>;

  /**
   * Creates a new comment based on the provided params.
   *
   * @param comment The comment to create.
   * @returns Returns true if the comment created successfully, else false.
   */
  createComment(comment: ICommentsType): Promise<boolean>;

  /**
   * Find the list of comments where the reply id is the same as the param id.
   *
   * @param replyId the replyId
   * @returns Returns the list of comments that has the same reply id as the param.
   */
  findCommentsByReplayId(replyId: string): Promise<IComment[]>;

  /**
   * Deletes a comment by id.
   *
   * @param id The id of the comment to delete.
   * @returns Returns true if the comment is deleted successfully.
   */
  deleteCommentById(id: string): Promise<boolean>;

  /**
   * Updates a comment with a new message.
   *
   * @param id The comment to update
   * @param message The new message of the comment.
   */
  updateComment(id: string, message: string): Promise<boolean>;

  /**
   * Hide a comment to be displayed under the video.
   *
   * @param id The id of the comment to hide
   */
  hideCommentById(id: string): Promise<boolean>;
}
