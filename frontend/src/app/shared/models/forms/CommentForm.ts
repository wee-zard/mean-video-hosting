export enum CommentFormField {
  MESSAGE = 'message',
}

export interface CommentFormType {
  [CommentFormField.MESSAGE]: any;
}

export interface CommentModel {
  [CommentFormField.MESSAGE]: string;
  videoId: string;
  userId: string;
  replyToCommentId: string;
}
