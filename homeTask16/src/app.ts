import express from "express";
import morgan from "morgan";
import bodyparser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { userController } from "./controllers/user.controller";
import { postController } from "./controllers/posts.controller";

export class App {
	app = express();
	PORT = 8000;

	useMiddlewares() {
		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(
			morgan(
				':date[iso] ":method :url" :status :res[content-length]'
			)
		);
		this.app.use(bodyparser.urlencoded({ extended: true }));
		this.app.use(bodyparser.json());
	}

	useRoutes() {
		this.app.use("/users", userController.router);
		this.app.use("/posts", postController.router);
	}

	async init() {
		this.useMiddlewares();
		this.useRoutes();
		this.app.listen(this.PORT, () => {
			console.log(`Server listening on port ${this.PORT}`);
		});
	}
}

(async () => {
	const app = new App();
	await app.init();
})();




