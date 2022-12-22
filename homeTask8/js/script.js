
const form = () => {
	const form = document.querySelector("form"),
	firstName = document.querySelector(".first-name"),
	lastName = document.querySelector(".last-name"),
	phone = document.querySelector(".phone"),
	email = document.querySelector(".email"),
	password = document.querySelector(".password"),
	confPassword = document.querySelector(".conf-password"),
	wrapper = document.querySelector(".wrapper"),
	modal = document.querySelector(".modal"),
	submitForm = document.querySelector(".modal-btn");

const errors = document.querySelectorAll(".error"),
	errorFirstName = document.getElementById("first-name__er"),
	errorLastName = document.getElementById("last-name__er"),
	errorPhone = document.getElementById("phone-name__er"),
	errorEmail = document.getElementById("email__er"),
	errorPassword = document.getElementById("password__er"),
	errorConfPassword = document.getElementById("conf-password__er");

const validName = (inputField, errorField) => {
	const regexName = /^[A-Z]+[a-z]*\w{1,}$/g;
	if (regexName.test(inputField.value)) {
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
	if(validNumber.slice(0,2) !== "38"){
		const regexPhone = /^067|^068|^097|^096|^093|^063|^073|^099|^050+\d{10,12}$/;
		if (regexPhone.test(validNumber)) {
			return true;
		}
		else {
			errorField.append("Invalid phone number");
			return false;
		}
	} else {
		const regexPhone = /^38067|^38068|^38097|^38096|^38093|^38063|^38073|^38099|^38050+\d{10,12}$/;
		if (regexPhone.test(validNumber)) {
			return true;
		}
		else {
			errorField.append("Invalid phone number");
			return false;
		}
	}		
};

const formatPhoneNumber = (phone) => {
	let number = phone.value.replace(/\D/g, "");
	return number.slice(0, 2) !== "38" ? "38" + number : number
};

const validEmail = (inputField, errorField) => {
	const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
	if (regexEmail.test(inputField.value)) {
		return true;
	}
	else {
		errorField.append("Invalid email");
		return false;
	}
};

const validPassword = (inputField, errorField) => {
	const refexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$)(?=.*[()_\-\`\\/\"\'|\[\]}{:;%!?&#@^*'/>.<,]).{8,}$/;
	if (refexPassword.test(inputField.value)) {
		return true;
	}
	else if (inputField.value.match(/(?=.*[А-Я]+[а-я])/g)) {
		errorField.append("The password should have only latin letters");
		return false;
	}
	else if (!inputField.value.match(/(?=.*[0-9])/g)) {
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
		return true;
	} else {
		errorConfPassword.append("The confirmed password is  not matching");
		return false;
	}
};



form.addEventListener("submit", (e) => {
	e.preventDefault();

	errors.forEach(error => {
		if(error.innerText){
			error.innerText = "";
		}
	})

	const isValidName = validName(firstName, errorFirstName);
	const isValidLastName = validName(lastName, errorLastName);
	const isValidPhone =  validPhone(phone, errorPhone)
	const isValidEmail =  validEmail(email, errorEmail)
	const isValidPassword =  validPassword(password, errorPassword)
	const isValidConfPassword = validConfPassword();

	if(isValidName && isValidLastName && isValidPhone && isValidEmail && isValidPassword && isValidConfPassword){
		const formatedPhone = formatPhoneNumber(phone);
		
		wrapper.style.opacity = 0.2;
		modal.classList.remove("hide");

		console.log(firstName.value);
		console.log(lastName.value);
		console.log(formatedPhone);
		console.log(email.value);
	}
});

submitForm.addEventListener("click", () => {
	form.reset();
	wrapper.style.opacity = 1;
	modal.classList.add("hide");
});

}

form();
