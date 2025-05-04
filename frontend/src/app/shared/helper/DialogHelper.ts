import { MatDialogConfig } from '@angular/material/dialog';
import { CommentDialogDataType } from '../models/CommentDialogDataType';
import { CommentDialogEnums } from '../enums/CommentDialogEnums';

export const commentMatDialogConfigs = (
  videoId: string,
  commentType: CommentDialogEnums,
  replyCommentId?: string,
): MatDialogConfig => {
  const data: CommentDialogDataType = {
    type: commentType,
    videoId: videoId,
    replyCommentId: replyCommentId,
  };

  return {
    width: '450px',
    height: '360px',
    panelClass: 'custom-comment-settings-dialog',
    data: data,
  };
};
