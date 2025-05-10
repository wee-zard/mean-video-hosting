import { IComment, Comment, ICommentsType } from '../../model/mongodbModels/Comment';
import CommentService from '../commentService';

export default class CommentServiceImpl implements CommentService {
  /**
   * @inheritdoc
   */
  getCommentsByVideoId(id: string): Promise<IComment[]> {
    return new Promise((resolve, reject) => {
      const query = Comment.find({ videoId: id });
      query.then((result) => resolve(result as IComment[])).catch(reject);
    });
  }

  /**
   * @inheritdoc
   */
  createComment(comment: ICommentsType): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let commentModel = new Comment(comment);
      commentModel.id = commentModel._id;
      commentModel
        .save()
        .then(() => resolve(true))
        .catch(reject);
    });
  }

  /**
   * @inheritdoc
   */
  findCommentsByReplayId(replyId: string): Promise<IComment[]> {
    return new Promise((resolve, reject) => {
      Comment.find({ replayId: replyId }).then(resolve).catch(reject);
    });
  }

  /**
   * @inheritdoc
   */
  deleteCommentById(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.findCommentsByReplayId(id)
        .then((data) => {
          const removeComments = [...data.map((comment) => comment.id), id];

          // TODO: Remove the sub-comments as well.
          Comment.deleteMany({ id: { $in: removeComments } })
            .then(() => resolve(true))
            .catch(reject);
        })
        .catch(reject);
    });
  }

  /**
   * @inheritdoc
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
   * @inheritdoc
   */
  hideCommentById(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Comment.updateOne({ id: id }, [{ $set: { isHidden: { $eq: [false, '$isHidden'] } } }])
        .then(() => resolve(true))
        .catch(reject);
    });
  }
}
