import mongoose from 'mongoose';
import { IComment, Comment, ICommentsType } from '../model/mongodbModels/Comment';

export default class CommentDao {
  /**
   * Deletes comments by video id.
   *
   * @param videoId The id of the video.
   * @returns Returns true if the comment is deleted successfully.
   */
  deleteCommentsByVideoId(videoId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const query = Comment.deleteMany({ videoId: videoId }).countDocuments();
      query.then((result) => resolve(true)).catch(reject);
    });
  }

  /**
   * Fetches the number of comments under the requested video.
   *
   * @param id the id of the video the search by.
   * @returns the number of comments under the video
   */
  getNumberOfCommentsUnderVideo(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const query = Comment.find({ videoId: id }).countDocuments();
      query.then((result) => resolve(result)).catch(reject);
    });
  }

  /**
   * Finds a list of comments by the id of the video.
   *
   * @param id the id of the video the search by.
   * @param Returns a list of comments.
   */
  getCommentsByVideoId(id: string): Promise<IComment[]> {
    return new Promise((resolve, reject) => {
      const query = Comment.find({ videoId: id });
      query.then((result) => resolve(result as IComment[])).catch(reject);
    });
  }

  /**
   * Find a by the id of the comment.
   *
   * @param id the id of the comment
   * @returns Returns a comment
   */
  findCommentById(id: string): Promise<IComment | null> {
    return new Promise((resolve, reject) => {
      const query = Comment.findOne({ id: id });
      query.then(resolve).catch(reject);
    });
  }

  /**
   * Find the list of comments where the reply id is the same as the param id.
   *
   * @param replyId the replyId
   * @returns Returns the list of comments that has the same reply id as the param.
   */
  getCommentsByReplyId(replyId: string): Promise<IComment[]> {
    return new Promise((resolve, reject) => {
      const query = Comment.find({ replayId: replyId });
      query.then(resolve).catch(reject);
    });
  }

  /**
   * Creates a new comment model by the provided param
   *
   * @param comment The comment to create.
   * @returns The new model.
   */
  constructCommentByIComment(comment: ICommentsType): mongoose.Document<unknown, {}, IComment> {
    let commentModel = new Comment(comment);
    commentModel.id = commentModel._id;
    return commentModel;
  }

  /**
   * Creates a new comment based on the provided params.
   *
   * @param comment The comment to create.
   * @returns Returns true if the comment created successfully, else false.
   */
  createComment(comment: mongoose.Document<unknown, {}, IComment>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      comment
        .save()
        .then(() => resolve(true))
        .catch(reject);
    });
  }

  /**
   * Delete those comments that are included in an array of ids.
   *
   * @param listOfCommentIdsToRemove The id of the comment to delete.
   * @returns Returns true if the comment is deleted successfully.
   */
  deleteCommentsByIds(listOfCommentIdsToRemove: string[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Comment.deleteMany({ id: { $in: listOfCommentIdsToRemove } })
        .then(() => resolve(true))
        .catch(reject);
    });
  }

  /**
   * Updates a comment with a new message.
   *
   * @param id The comment to update
   * @param message The new message of the comment.
   */
  updateComment(id: string, message: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Comment.updateOne(
        { id: id },
        { $set: { message: message, lastModification: new Date(Date.now()).toISOString() } }
      )
        .then(() => resolve(true))
        .catch(reject);
    });
  }

  /**
   * Hide a comment to be displayed under the video.
   *
   * @param id The id of the comment to hide
   */
  hideCommentById(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Comment.updateOne({ id: id }, [{ $set: { isHidden: { $eq: [false, '$isHidden'] } } }])
        .then(() => resolve(true))
        .catch(reject);
    });
  }
}
