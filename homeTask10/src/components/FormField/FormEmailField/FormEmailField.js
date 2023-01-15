import React from "react"
import { Input } from "../../Input/Input"
import { validateEmail } from "../../utils/validate";

export const FormEmailField = ({
	onChange: propsOnChange,
	onError,
	required,
	...rest
}) => {

	const onChange = (event) => {
		const { value } = event.target;
		onError(validateEmail(value, { required }))
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