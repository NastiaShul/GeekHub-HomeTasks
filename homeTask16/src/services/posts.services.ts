import { Post } from "../commons/types-and-interfaces";

export class PostService {
	db: Post[] = [];
	private idCounter: number = 0;

	addPost(post: Post): Post {

		const newPost = { ...post, id: ++this.idCounter };
		this.db.push(newPost);
		console.log(`Posts database = ${JSON.stringify(this.db)}`);
		return newPost;
	}

	getPosts(userId: number): Post[] {
		return this.db.filter(post => post.userId == userId);
	}

	deletePost(userId: number, id: number): void {
		const indexPost = this.db.findIndex(post => post.userId == userId && post.id == id);
		if (indexPost == -1) return;

		this.db.splice(indexPost, 1);
	}

	updatePost(userId: number, id: number, topic: string, text: string): Post | void {

		const updPost = this.db.find(post => post.userId == userId && post.id == id);
		if (updPost) {
			if (topic) updPost.topic = topic;
			if (text) updPost.text = text;
		}
		return updPost;
	}

}

export const postService = new PostService();