import React from "react"
import { Input } from "../../Input/Input"
import { validateName } from "../../utils/validate";

export const FormNameField = ({
	onChange: propsOnChange,
	onError,
	required,
	...rest
}) => {

	const onChange = (event) => {
		const { value } = event.target;
		onError(validateName(value, { required }))
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