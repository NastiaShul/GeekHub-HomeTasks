import { StatusCodes } from "http-status-codes";
import { Types } from "mongoose";
import { HttpError } from "../commons/errors/http.error";
import { PostModel, Post } from './../models/post.model';

export class PostService {

   async deletePost(
      _id: string,
   ) {
      const currentPost = await PostModel.findByIdAndDelete({ _id: new Types.ObjectId(_id) });
      if (!currentPost) {
         throw new HttpError(StatusCodes.NOT_FOUND, "Post is not found", "PostController")
      }
   }

   async updatePost(
      _id: string,
      topic: string,
      text: string,
   ) {
      const post = await PostModel.findByIdAndUpdate({ _id: new Types.ObjectId(_id) }, { topic, text });
      if (post) {
         return post;
      } else {
         throw new HttpError(StatusCodes.NOT_FOUND, "Post is not found", "PostController")
      }
   }

}

export const postService = new PostService();