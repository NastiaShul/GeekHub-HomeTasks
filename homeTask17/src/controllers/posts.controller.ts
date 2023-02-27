import express, { Request, Response, NextFunction } from "express";
import { postService } from "../services/posts.services";

export class PostController {
   router = express.Router();
   constructor() {
      this.router.delete("/:postId", this.deletePost);
      this.router.patch("/:postId", this.updatePost);
   }

   deletePost = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { postId } = req.params;
         await postService.deletePost(postId);
         res.send("Post successfully deleted");
      } catch (e: any) {
         next(e);
      }
   }

   updatePost = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { postId} = req.params;
         const { topic, text } = req.body;
         await postService.updatePost(postId, topic, text);
         res.send("Post successfully updated");
      } catch (e: any) {
         next(e);
      }
   }

}

export const postController = new PostController;