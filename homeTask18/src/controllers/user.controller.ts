import { NextFunction, Request, Response } from "express";
import { BaseController } from "../commons/abstract/base.controller";
import { userService } from "../services/user.servise";
import { userBodySchema } from "../commons/validation/user.validation";
import { postBodySchema, postParamsSchema } from "../commons/validation/post.validation";

export class UserController extends BaseController {
   constructor() {
      super();
      this.bindRoutes([
         {
            path: "/register",
            method: "post",
            handler: this.register,
            validators: {
               body: userBodySchema
            }
         },
         {
            path: "/login",
            method: "post",
            handler: this.login,
         },
         {
            path: "/:userId/posts",
            method: "post",
            handler: this.addPost,
            validators: {
               body: postBodySchema,
               params: postParamsSchema
            }
         },
         {
            path: "/:userId/posts",
            method: "get",
            handler: this.getPosts,
         }
      ])
   }

   register = async (req: Request, res: Response, next: NextFunction) => {
      const { username, password} = req.body;
      const user = await userService.addUser(username, password, req.body);
      res.send(user);
   };

   login = async (req: Request, res: Response, next: NextFunction) => {
      const { username, password } = req.body;
      const response = await userService.login(username, password);
      res.send(response);
   };

   addPost = async (req: Request, res: Response) => {
      const { topic, text } = req.body;
      const { userId } = req.params;
      const post = await userService.addPost(topic, text, userId);
      res.send(post);
   };

   getPosts = async (req: Request, res: Response) => {
      const { userId } = req.params;
      const { limit = 10, page = 1 } = req.query;
      const response = await userService.getPosts(userId, +limit, +page);
      res.send(response);
   };

}

export const userController = new UserController;

