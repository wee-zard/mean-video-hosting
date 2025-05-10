enum MessageEnums {
  VIDEO_VIEW_INCREMENT = 'Failed to increment the view count of the video!',
  USER_NOT_PROVIDED = 'User has not been provided!',
  VIDEO_NOT_PROVIDED = 'Video has not been provided!',
  GET_VIDEO_BY_ID = 'Error occurred while fetching the video!',
  GET_RANDOM_VIDEOS = 'Error occurred while fetching random videos!',
  GET_COMMENTS_ERROR = 'Error occurred while fetching the comments from the videos!',
  UPDATE_RATINGS = 'Error occurred while updating the rating of the video!',
  DENIED_COMMENT_DELETION = 'Permission denied to remove the comment!',
  COMMENT_IS_DELETED = 'Comment has been successfully removed!',

  COMMENT_IS_NOW_HIDDEN = 'The selected comment is now hidden!',
  COMMENT_IS_NOW_NOT_HIDDEN = 'The selected comment is now not hidden!',
  COMMENT_HIDE_CHANGE_ERROR = 'Error occurred while changing the visibility of the selected comment!',

  REMOVE_COMMENT_BY_ID = 'Error occurred while removing the comment!',
  INVALID_COMMENT_FORM = 'The comment form is invalid!',
  CREATE_COMMENT_ERROR = 'Error occurred while saving the new comment!',
}

export default MessageEnums;
