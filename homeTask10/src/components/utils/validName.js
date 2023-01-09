export const validName = (value) => {
	if (value.match(/^[А-Я]+[а-я]*/g)) {
		return "The name should be only in Latin letters"
	}
	if (value.match(/^[А-Я]+[а-я]*/g)) {
		return "The name should be only in Latin letters"
	}
	if (!value.match(/^[A-Z]/)) {
		return "The name should start with a capital letter";
	}
	if (!value.match(/[a-z]*\w{2,}$/g)) {
		return "The name should have 2+ letters";
	}
};
