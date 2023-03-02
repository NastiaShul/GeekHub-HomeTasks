import { Types } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '../commons/errors/http.error';
import { UserModel, User } from './../models/user.model';
import { Post, PostModel } from '../models/post.model';
import bcrypt from 'bcrypt';

export class UserService {

   async addUser(
      username: string,
      password: string,
      params: object
   ): Promise<User> {
      const findUser: User | null = await UserModel.findOne({ username });
      if (findUser) {
         throw new HttpError(StatusCodes.CONFLICT, `User ${username} already exists`, "UserController");
      }
      const hashPassword = await bcrypt.hash(password, 7);
      return UserModel.create({ ...params, password: hashPassword });
   }

   async login(
      username: string,
      password: string,
      isAdmin: boolean = false
   ) {
      const findUser = await UserModel.findOne({ username });
      if (findUser !== null) {
         const validPassword = bcrypt.compareSync(password, findUser!.password);
         if (!validPassword) {
            throw new HttpError(StatusCodes.NOT_FOUND, "Password is not valid", "UserController");
         }
         return findUser;
      } else {
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
      const total = await PostModel.find({ author }).countDocuments();
      const posts = await PostModel.find({ author }).sort({ createdAt: 1 }).skip(skip).limit(limit).exec();
      return { posts, total };
   }
   
}

export const userService = new UserService();

