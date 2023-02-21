import { User } from "../commons/types-and-interfaces";

export class UserService {
	db: User[] = [];
	private idCounter: number = 0;

	async addUser(username: string, password: string, isAdmin: boolean = false): Promise<User> {
		const user: User = {
			id: ++this.idCounter,
			username,
			password,
			isAdmin,
		}

		this.db.push(user);

		console.log(`Users database = ${JSON.stringify(this.db)}`);

		return user;
	}
}

export const userService = new UserService();