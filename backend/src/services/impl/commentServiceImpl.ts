import RootDao from '../../dao/rootDao';
import { IComment, ICommentsType } from '../../model/mongodbModels/Comment';
import CommentService from '../commentService';

export default class CommentServiceImpl implements CommentService {
  /**
   * @inheritdoc
   */
  deleteCommentsByVideoId(videoId: string): Promise<boolean> {
    return RootDao.commentDao.deleteCommentsByVideoId(videoId);
  }

  /**
   * @inheritdoc
   */
  getNumberOfCommentsUnderVideo(id: string): Promise<number> {
    return RootDao.commentDao.getNumberOfCommentsUnderVideo(id);
  }

  /**
   * @inheritdoc
   */
  getCommentsByVideoId(id: string): Promise<IComment[]> {
    return RootDao.commentDao.getCommentsByVideoId(id);
  }

  /**
   * @inheritdoc
   */
  createComment(comment: ICommentsType): Promise<boolean> {
    const commentModel = RootDao.commentDao.constructCommentByIComment(comment);
    return RootDao.commentDao.createComment(commentModel);
  }

  /**
   * @inheritdoc
   */
  findCommentById(id: string): Promise<IComment | null> {
    return RootDao.commentDao.findCommentById(id);
  }

  /**
   * @inheritdoc
   */
  findCommentsByReplayId(replyId: string): Promise<IComment[]> {
    return RootDao.commentDao.getCommentsByReplyId(replyId);
  }

  /**
   * @inheritdoc
   */
  deleteCommentById(id: string, videoId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.findCommentsByReplayId(id)
        .then((data) => {
          // TODO: Find comment by id, so we could delete that, because now the data is null, if the replyId is null
          const listOfCommentIdsToRemove = [...data.map((comment) => comment.id), id];

          RootDao.videoDao
            .changeCommentNumberOfVideo(videoId, false, listOfCommentIdsToRemove.length)
            .then(() => {
              RootDao.commentDao
                .deleteCommentsByIds(listOfCommentIdsToRemove)
                .then(resolve)
                .catch(reject);
            })
            .catch(reject);
        })
        .catch(reject);
    });
  }

  /**
   * @inheritdoc
   */
  updateComment(id: string, message: string): Promise<boolean> {
    return RootDao.commentDao.updateComment(id, message);
  }

  /**
   * @inheritdoc
   */
  hideCommentById(id: string): Promise<boolean> {
    return RootDao.commentDao.hideCommentById(id);
  }
}
