export const validPass = (value) => {
	if (value.match(/(?=.*[А-Я]+[а-я])/g)) {
		return "The password should have only latin letters";
	}
	if (!value.match(/(?=.*[0-9])/g)) {
		return "The password should have even one of the digit";
	}
	if (!value.match(/(?=.*[A-Z])/g)) {
		return "The password should have even one of the capital letter";
	}
	if (!value.match(/(?=.*[()_\-\`\\/\"\'|\[\]}{:;%!?&#@^*'/>.<,])/g)) {
		return "The password should have even one of the special character";
	}
	if (!value.match(/.{8,}/g)) {
		return "The password should have 8+ symbols";
	}
};