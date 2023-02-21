import express, { Request, Response, NextFunction } from "express";
import { userService } from "../services/user.servise";

export class UserController {
	router = express.Router();
	constructor() {
		this.router.get("/", this.getUsers);
		this.router.post("/register", this.register);
		this.router.post("/login", this.login);
	}

	getUsers = async (req: Request, res: Response) => {
		const userList = userService.db;
		res.send(userList);
	};

	register = async (req: Request, res: Response) => {
		const { username, password } = req.body;

		const user = await userService.addUser(username, password);
		res.send(user);
	};


	login = (req: Request, res: Response) => {
		const userList = userService.db;
		const { username, password } = req.body;

		const user = userList.find(user => user.username == username && user.password == password);
		res.send(user);
	};

}



export const userController = new UserController;