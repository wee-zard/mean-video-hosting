import MessageEnums from '../enums/MessageEnums';
import { SeverityEnums } from '../enums/SeverityEnums';

export const listOfMessages = Object.freeze({
  // Error snackbar messages
  [MessageEnums.VIDEO_VIEW_INCREMENT]: () => SeverityEnums.ERROR,
  [MessageEnums.VIDEO_NOT_PROVIDED]: () => SeverityEnums.ERROR,
  [MessageEnums.GET_VIDEO_BY_ID]: () => SeverityEnums.ERROR,
  [MessageEnums.GET_RANDOM_VIDEOS]: () => SeverityEnums.ERROR,
  [MessageEnums.GET_COMMENTS_ERROR]: () => SeverityEnums.ERROR,
  [MessageEnums.USER_NOT_PROVIDED]: () => SeverityEnums.ERROR,
  [MessageEnums.UPDATE_RATINGS]: () => SeverityEnums.ERROR,
  [MessageEnums.DENIED_COMMENT_DELETION]: () => SeverityEnums.ERROR,
  [MessageEnums.REMOVE_COMMENT_BY_ID]: () => SeverityEnums.ERROR,
  [MessageEnums.INVALID_COMMENT_FORM]: () => SeverityEnums.ERROR,
  [MessageEnums.CREATE_COMMENT_ERROR]: () => SeverityEnums.ERROR,
  [MessageEnums.COMMENT_HIDE_CHANGE_ERROR]: () => SeverityEnums.ERROR,

  // Success snackbar messages
  [MessageEnums.COMMENT_IS_DELETED]: () => SeverityEnums.SUCCESS,
  [MessageEnums.COMMENT_IS_NOW_HIDDEN]: () => SeverityEnums.SUCCESS,
  [MessageEnums.COMMENT_IS_NOW_NOT_HIDDEN]: () => SeverityEnums.SUCCESS,
});
