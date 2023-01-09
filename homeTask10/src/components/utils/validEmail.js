export const validEmail = (value) => {
	if (!value.match(/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}/i)) {
		return "Invalid email";
	}
};

