export interface CommentResponse {
  id: string;
  message: string;
  lastModification: string;
  replyId: string | null;
  user: {
    userId: string;
    userName: string;
    profilePicturePath: string;
  };
  videoId: string;
  isCommentClicked?: boolean;
}
