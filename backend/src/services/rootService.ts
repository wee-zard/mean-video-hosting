import CommentService from './commentService';
import CommentServiceImpl from './impl/commentServiceImpl';
import UserServiceImpl from './impl/userServiceImpl';
import UserService from './userService';

export abstract class RootService {
  public static commentService: CommentService = new CommentServiceImpl();
  public static userService: UserService = new UserServiceImpl();
}
