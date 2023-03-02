import express, { Request, Response, NextFunction } from "express";
import { BaseController } from "../commons/abstract/base.controller";
import { postService } from "../services/posts.services";
import { postUpdateSchema} from "../commons/validation/post.validation";

export class PostController extends BaseController {
   constructor() {
      super();
      this.bindRoutes([
         {
            path:"/:postId",
            method: "delete",
            handler: this.deletePost,
         },
         {
            path:"/:postId",
            method: "patch",
            handler: this.updatePost,
            validators: {
               body: postUpdateSchema
            }
         }
      ])
   }

   deletePost = async (req: Request, res: Response, next: NextFunction) => {
         const { postId } = req.params;
         await postService.deletePost(postId);
         res.send("Post successfully deleted");
   }

   updatePost = async (req: Request, res: Response, next: NextFunction) => {
         const { postId } = req.params;
         const post = await postService.updatePost(postId, req.body);
         res.send(`Post successfully updated: ${post}`);
   }
}

export const postController = new PostController;