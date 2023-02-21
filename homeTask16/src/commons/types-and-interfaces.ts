
export type User = {
	id: number,
	username: string,
	password: string,
	isAdmin: boolean
}

export type Post = {
	id: number,
	userId: number,
	topic: string,
	text: string, 
}
