export type VideoRatingUpdateRequest = {
  video_id: string;
  user_id: string;
  is_liked: boolean | undefined;
};
