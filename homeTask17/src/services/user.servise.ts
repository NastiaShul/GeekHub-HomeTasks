import { Types } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '../commons/errors/http.error';
import { UserModel, User } from './../models/user.model';
import { Post, PostModel } from '../models/post.model';

export class UserService {

   async addUser(
      username: string,
      password: string,
      isAdmin: boolean = false
   ): Promise<User> {
      const findUser: User | null = await UserModel.findOne({ username });
      if (findUser !== null) {
         throw new HttpError(StatusCodes.CONFLICT, `User ${username} already exists`, "UserController");
      } else {
         return UserModel.create({ username, password, isAdmin });
      }
   }

   async login(
      username: string,
      password: string,
      isAdmin: boolean = false
   ) {
      const findUser: User | null = await UserModel.findOne({ username });
      if (findUser) {
         return findUser;
      } else if (findUser === null) {
         throw new HttpError(StatusCodes.NOT_FOUND, `User ${username} is not found`, "UserController");
      }
   }

   async addPost(
      topic: string,
      text: string,
      userId: string,
   ): Promise<Post> {
      return PostModel.create({ topic, text, author: new Types.ObjectId(userId) })
   }

   async getPosts(
      author: string,
      limit: number,
      page: number,
   ): Promise<{ posts: Post[], total: number }> {
      const skip = (page - 1) * limit;
      const countQuery = PostModel.find({ author });
      const postsQuery = PostModel.find({ author }).sort({ createdAt: 1 });
      const total = await countQuery.countDocuments();
      const posts = await postsQuery.skip(skip).limit(limit).exec();
      return { posts, total };
   }


}

export const userService = new UserService();

