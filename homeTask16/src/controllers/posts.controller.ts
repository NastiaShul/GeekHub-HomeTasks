import express, { Request, Response } from "express";
import { postService } from "../services/posts.services";

export class PostController {
	router = express.Router();
	constructor() {
		this.router.get("/", this.getPosts);
		this.router.post("/", this.addPost);
		this.router.delete("/:id", this.deletePost);
		this.router.patch("/:id", this.updatePost);
	}

	getPosts = (req: Request, res: Response) => {
		const { userId, skip = 1, take = 10 } = req.query;
		if (userId) {
			const userPostd = postService.getPosts(+userId);

			const page = (+skip - 1) * +take;
			const limit = +skip * +take;
			const pagination = userPostd.slice(page, limit);
			res.send(pagination);
		} else {
			let postsList = postService.db;
			res.send(postsList);
		}
	};

	addPost = (req: Request, res: Response) => {
		const post = req.body;

		const newPost = postService.addPost(post);
		res.send(newPost);
	};

	deletePost = (req: Request, res: Response) => {
		const { userId } = req.query;
		const { id } = req.params;
		if (!userId) return res.send("not found");
		postService.deletePost(+userId, +id);
		res.send("deleted");
	}

	updatePost = (req: Request, res: Response) => {
		const { topic, text } = req.body;
		const { userId } = req.query;
		const { id } = req.params;
		if (!userId) return res.send("not found");
		postService.updatePost(+userId, +id, topic, text);
		res.send(`Post ${id} is updated`);
	}

}

export const postController = new PostController;