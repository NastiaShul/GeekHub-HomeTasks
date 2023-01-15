import React from "react";
import { PasswordInput } from "../PasswordInput/PasswordInput"
import { validatePassword } from "../../utils/validate";

export const FormPasswordField = ({
	onChange: propsOnChange,
	required,
	onError,
	...rest
}) => {
	const onChange = (event) => {
		const { value } = event.target;
		onError(validatePassword(value, { required }))
		propsOnChange(value);
	};

	return (
		<PasswordInput
			{...rest}
			required={required}
			onChange={onChange}
		/>
	);
};