
export const Required = "required";

export function validateName(value, { required } = {}) {
	const result = [];

	if (required && !value) {
		result.push(Required);
	}
	if (value && value.match(/^[А-Я]+[а-я]*/g)) {
		result.push("The name should be only in Latin letters");
	}
	if (value && !value.match(/^[A-Z]/)) {
		result.push("The name should start with a capital letter");
	}
	if (value && value.length < 3) {
		result.push("The name should have 2+ letters");
	}
	return result.length === 0 ? null : result.join(". ");
}


export function validatePassword(value, { required } = {}) {
	const result = [];

	if (required && !value) {
		result.push(Required);
	}
	if (value && value.match(/(?=.*[А-Я]+[а-я])/g)) {
		result.push("The password should have only latin letters");
	}
	if (value && !value.match(/(?=.*[0-9])/g)) {
		result.push("The password should have even one of the digit");
	}
	if (value && !value.match(/(?=.*[A-Z])/g)) {
		result.push("The password should have even one of the capital letter");
	}
	if (value && !value.match(/(?=.*[()_\-\`\\/\"\'|\[\]}{:;%!?&#@^*'/>.<,])/g)) {
		result.push("The password should have even one of the special character");
	}
	if (value && !value.match(/.{8,}/g)) {
		result.push("The password should have 8+ symbols");
	}
	return result.length === 0 ? null : result.join(". ");
};

export function validateConfirmPassword(password, confirmPassword) {
	if (password !== confirmPassword) {
		return "The confirmed password is not matching";
	}
}

export function validateEmail(value, { required } = {}) {
	const result = [];

	if (required && !value) {
		result.push(Required);
	}
	if (value && !value.match(/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}/i)) {
		return "Invalid email";
	}
	return result.length === 0 ? null : result.join(". ");
}

export function validatePhone(value, { required } = {}) {
	const result = [];
	const validNumber = value.replace(/\D/g, "");

	if (required && !value) {
		result.push(Required);
	}
	if (value && value.length < 10){
		return "Phone number should have 10+ symbols";
	}
	
	if (validNumber.slice(0, 2) !== "38") {
		const regexPhone = /^067|^068|^097|^096|^093|^063|^073|^099|^050+\d{10,12}$/;
		if (!regexPhone.test(validNumber)) {
			return "Invalid phone number";
		}
	} else {
		const regexPhone = /^38067|^38068|^38097|^38096|^38093|^38063|^38073|^38099|^38050+\d{10,12}$/;
		if (!regexPhone.test(validNumber)) {
			return "Invalid phone number";
		}
	}
	return result.length === 0 ? null : result.join(". ");
}