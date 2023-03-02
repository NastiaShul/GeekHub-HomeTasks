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
      params: object
   ) {
      const post = await PostModel.findByIdAndUpdate(
         { _id: new Types.ObjectId(_id) },
         params,
         { new: true }
      );
      if (!post) {
         throw new HttpError(StatusCodes.NOT_FOUND, "Post is not found", "PostController");
      }
      return post;
   }

}

export const postService = new PostService();