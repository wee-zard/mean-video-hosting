import { MatDialogConfig } from '@angular/material/dialog';
import { CommentDialogDataType } from '../models/CommentDialogDataType';
import { CommentDialogEnums } from '../enums/CommentDialogEnums';
import { VideoResponse } from '../models/response/VideoResponse';

export const commentMatDialogConfigs = (
  videoId: string,
  commentType: CommentDialogEnums,
  replyCommentId?: string,
  message?: string,
): MatDialogConfig => {
  const data: CommentDialogDataType = {
    type: commentType,
    videoId: videoId,
    replyCommentId: replyCommentId,
    commentMessage: message,
  };

  return {
    width: '450px',
    height: '360px',
    panelClass: 'common-dialog-setting',
    data: data,
  };
};

export const videoModificationMatDialogConfigs = (
  video: VideoResponse,
  height: number = 550,
): MatDialogConfig => {
  return {
    width: '480px',
    height: `${height}px`,
    panelClass: 'common-dialog-setting',
    data: video,
  };
};

export const videoUploadMatDialogConfigs = (): MatDialogConfig => {
  return {
    width: '480px',
    height: `500px`,
    panelClass: 'common-dialog-setting',
  };
};
