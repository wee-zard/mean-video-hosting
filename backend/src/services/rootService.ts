import CommentService from './commentService';
import CommentServiceImpl from './impl/commentServiceImpl';
import UserServiceImpl from './impl/userServiceImpl';
import VideoServiceImpl from './impl/videoServiceImpl';
import UserService from './userService';
import VideoService from './videoService';

export abstract class RootService {
  public static commentService: CommentService = new CommentServiceImpl();
  public static userService: UserService = new UserServiceImpl();
  public static videoService: VideoService = new VideoServiceImpl();
}
