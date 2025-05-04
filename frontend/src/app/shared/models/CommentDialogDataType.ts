import { CommentDialogEnums } from '../enums/CommentDialogEnums';

export type CommentDialogDataType = {
  type: CommentDialogEnums;
  replyCommentId?: string;
  videoId: string;
};
