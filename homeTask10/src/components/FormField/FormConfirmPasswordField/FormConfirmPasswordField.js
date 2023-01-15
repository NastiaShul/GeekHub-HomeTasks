import React from "react";

import { PasswordInput } from "../PasswordInput/PasswordInput"
import { validateConfirmPassword } from "../../utils/validate";
import { useFormContext } from "../../Form/Form";

export const FormConfirmPasswordField = ({
	onChange: propsOnChange,
	required,
	onError,
	...rest
}) => {
	const { values } = useFormContext();
	const { password } = values;

	const onChange = (event) => {
		const { value } = event.target;
		onError(validateConfirmPassword(password, value));
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