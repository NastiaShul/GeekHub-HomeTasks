import React from "react"
import { Input } from "../../Input/Input"
import { validatePhone } from "../../utils/validate";

export const FormPhoneField = ({
	onChange: propsOnChange,
	onError,
	required,
	...rest
}) => {

	const onChange = (event) => {
		const { value } = event.target;
		onError(validatePhone(value, { required }))
		propsOnChange(value);
	};

	return (
		<Input
			{...rest}
			onChange={onChange}
			required={required}
		/>

	);
};