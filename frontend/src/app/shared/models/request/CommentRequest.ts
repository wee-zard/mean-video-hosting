export type CommentRequest = {
  replyId: string | null;
  videoId: string;
  user: {
    userId: string;
    userName: string;
    profilePicturePath?: string;
  };
  lastModification: string;
  message: string;
};
