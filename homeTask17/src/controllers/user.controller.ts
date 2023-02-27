import express, { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.servise";

export class UserController {
   router = express.Router();
   constructor() {
      this.router.post("/register", this.register);
      this.router.post("/login", this.login);
      this.router.post("/:userId/posts", this.addPost);
      this.router.get("/:userId/posts", this.getPosts);
   }

   register = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { username, password } = req.body;
         const user = await userService.addUser(username, password);
         res.send(user);
      } catch (e: any) {
         next(e);
      }
   };

   login = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { username, password } = req.body;
         const response = await userService.login(username, password);
         res.send(response);
      } catch (e: any) {
         next(e);
      }
   };

   addPost = async (req: Request, res: Response) => {
      const { topic, text } = req.body;
      const { userId } = req.params;
      const post = await userService.addPost(topic, text, userId);
      res.send(post);
   };

   getPosts = async (req: Request, res: Response) => {
      const { userId } = req.params;
      const response = await userService.getPosts(userId);
      res.send(response);
   };

}



export const userController = new UserController;

