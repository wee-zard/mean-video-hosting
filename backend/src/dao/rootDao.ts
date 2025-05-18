import CommentDao from './commentDao';
import TagDao from './tagDao';
import UserDao from './userDao';
import VideoDao from './videoDao';

export default abstract class RootDao {
  public static videoDao = new VideoDao();
  public static commentDao = new CommentDao();
  public static userDao = new UserDao();
  public static tagDao = new TagDao();
}
