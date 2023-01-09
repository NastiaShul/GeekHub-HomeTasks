export const validPhone = (value) => {
	const validNumber = value.replace(/\D/g, "");

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
};

