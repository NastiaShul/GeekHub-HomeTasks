
const form = document.querySelector("form"),
	firstName = document.querySelector(".first-name"),
	lastName = document.querySelector(".last-name"),
	phone = document.querySelector(".phone"),
	email = document.querySelector(".email"),
	password = document.querySelector(".password"),
	confPassword = document.querySelector(".conf-password");

const errorFirstName = document.getElementById("first-name__er"),
	errorLastName = document.getElementById("last-name__er"),
	errorPhone = document.getElementById("phone-name__er"),
	errorEmail = document.getElementById("email__er"),
	errorPassword = document.getElementById("password__er"),
	errorConfPassword = document.getElementById("conf-password__er");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	validName(firstName, errorFirstName)
	validName(lastName, errorLastName)
	validPhone(phone, errorPhone)
	validEmail(email, errorEmail)
	validPassword(password, errorPassword)
	validConfPassword();

});

const validName = (inputField, errorField) => {
	const regexName = /^[A-Z]+[a-z]*\w{1,}$/g;
	if (regexName.test(inputField.value)) {
		console.log(inputField.value);
		return true;
	}
	else if (inputField.value.match(/^[А-Я]+[а-я]*/g)) {
		errorField.append("The name should be only in Latin letters");
		return false;
	}
	else if (!inputField.value.match(/^[A-Z]/)) {
		errorField.append("The name should be with a capital letter");
		return false;
	}
	else if (!inputField.value.match(/[a-z]*\w{2,}$/g)) {
		errorField.append("The name should have 2+ letters");
		return false;
	}
};

const validPhone = (inputField, errorField) => {
	const validNumber = inputField.value.replace(/\D/g, "");
	const regexPhone = /^067|^068|^097|^096|^093|^063|^073|^099|^050+\d{10,12}$/;
	if (regexPhone.test(validNumber)) {
		console.log("Phone number: " + validNumber);
		return true;
	}
	else if (!regexPhone.test(validNumber)) {
		errorField.append("Invalid phone number");
		return false;
	}
};

const validEmail = (inputField, errorField) => {
	const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
	if (regexEmail.test(inputField.value)) {
		console.log("email: " + inputField.value);
		return true;
	}
	else if (!inputField.value.match(regexEmail)) {
		errorField.append("Invalid email");
		return false;
	}
};

const validPassword = (inputField, errorField) => {
	const refexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$)(?=.*[()_\-\`\\/\"\'|\[\]}{:;%!?&#@^*'/>.<,]).{8,}$/;
	if (refexPassword.test(inputField.value)) {
		console.log("Password: true");
		return true;
	}
	else if (!inputField.value.match(/^(?=.*[0-9])/g)) {
		errorField.append("The password should have even one of the digit");
		return false;
	}
	else if (!inputField.value.match(/(?=.*[A-Z])/g)) {
		errorField.append("The password should have even one of the capital letter");
		return false;
	}
	else if (!inputField.value.match(/(?=.*[()_\-\`\\/\"\'|\[\]}{:;%!?&#@^*'/>.<,])/g)) {
		errorField.append("The password should have even one of the special character");
		return false;
	}
	else if (!inputField.value.match(/.{8,}/g)) {
		errorField.append("The password should have 8+ symbols");
		return false;
	}
};

const validConfPassword = () => {
	if (password.value === confPassword.value) {
		console.log("Confirm password: true");
		return true;
	} else if (password.value !== confPassword.value) {
		errorConfPassword.append("The confirmed password is  not matching");
		return false;
	}
};
