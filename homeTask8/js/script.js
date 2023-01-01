
const form = () => {

	const form = document.querySelector("form"),
		firstName = document.getElementById("first-name"),
		lastName = document.getElementById("last-name"),
		phone = document.getElementById("phone"),
		email = document.getElementById("email"),
		password = document.getElementById("password"),
		confPassword = document.getElementById("conf-password"),
		wrapper = document.querySelector(".wrapper"),
		modal = document.querySelector(".modal"),
		submitForm = document.querySelector(".modal-btn");

	const errorFirstName = document.getElementById("first-name__er"),
		errorLastName = document.getElementById("last-name__er"),
		errorPhone = document.getElementById("phone-name__er"),
		errorEmail = document.getElementById("email__er"),
		errorPassword = document.getElementById("password__er"),
		errorConfPassword = document.getElementById("conf-password__er");

	const validName = (inputField) => {
		if (inputField.value.match(/^[А-Я]+[а-я]*/g)) {
			return "The name should be only in Latin letters"
		}
		if (inputField.value.match(/^[А-Я]+[а-я]*/g)) {
			return "The name should be only in Latin letters"
		}
		if (!inputField.value.match(/^[A-Z]/)) {
			return "The name should be with a capital letter";
		}
		if (!inputField.value.match(/[a-z]*\w{2,}$/g)) {
			return "The name should have 2+ letters";
		}
	};

	const validPhone = (inputField) => {
		const validNumber = inputField.value.replace(/\D/g, "");
		if (validNumber.slice(0, 2) !== "38") {
			const regexPhone = /^067|^068|^097|^096|^093|^063|^073|^099|^050+\d{10,12}$/;
			if (regexPhone.test(!validNumber)) {
				return "Invalid phone number";
			}
		} else {
			const regexPhone = /^38067|^38068|^38097|^38096|^38093|^38063|^38073|^38099|^38050+\d{10,12}$/;
			if (regexPhone.test(!validNumber)) {
				return "Invalid phone number";
			}
		}
	};

	const formatPhoneNumber = (phone) => {
		let number = phone.value.replace(/\D/g, "");
		return number.slice(0, 2) !== "38" ? "38" + number : number
	};

	const validEmail = (inputField) => {
		if (!inputField.value.match(/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}/i)) {
			return "Invalid email";
		}
	};

	const validPassword = (inputField) => {
		if (inputField.value.match(/(?=.*[А-Я]+[а-я])/g)) {
			return "The password should have only latin letters";
		}
		if (!inputField.value.match(/(?=.*[0-9])/g)) {
			return "The password should have even one of the digit";
		}
		if (!inputField.value.match(/(?=.*[A-Z])/g)) {
			return "The password should have even one of the capital letter";
		}
		if (!inputField.value.match(/(?=.*[()_\-\`\\/\"\'|\[\]}{:;%!?&#@^*'/>.<,])/g)) {
			return "The password should have even one of the special character";
		}
		if (!inputField.value.match(/.{8,}/g)) {
			return "The password should have 8+ symbols";
		}
	};

	const validConfPassword = (inputField) => {
		if (password.value !== inputField.value) {
			return "The confirmed password is  not matching";
		}
	};

	form.addEventListener("submit", e => {
		e.preventDefault();
		const errorNameMessage = validName(firstName);
		errorFirstName.innerText = errorNameMessage || "";

		const errorLastMessage = validName(lastName);
		errorLastName.innerText = errorLastMessage || "";

		const errorPhoneMessage = validPhone(phone);
		errorPhone.innerText = errorPhoneMessage || "";

		const errorEmailMessage = validEmail(email);
		errorEmail.innerText = errorEmailMessage || "";

		const errorPasswordMessage = validPassword(password);
		errorPassword.innerText = errorPasswordMessage || "";

		const errorConfPasswordMessage = validConfPassword(confPassword);
		errorConfPassword.innerText = errorConfPasswordMessage || "";

		if (!(errorNameMessage || errorLastMessage || errorPhoneMessage || errorEmailMessage || errorPasswordMessage || errorConfPasswordMessage)) {
			const formatedPhone = formatPhoneNumber(phone);

			wrapper.style.opacity = 0.2;
			modal.classList.remove("hide");

			console.log(firstName.value);
			console.log(lastName.value);
			console.log(formatedPhone);
			console.log(email.value);
		}
	})

	submitForm.addEventListener("click", () => {
		form.reset();
		wrapper.style.opacity = 1;
		modal.classList.add("hide");
	});

}

form();
