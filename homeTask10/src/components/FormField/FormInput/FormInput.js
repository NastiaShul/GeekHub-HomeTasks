import React from "react"
import { Input } from "../../Input/Input";

export const FormInput = () => ({
	onChange: propsOnChange,
	...rest
}) => {

	const onChange = (event) => {
		propsOnChange(event.target.value);
	};

	return (
		<Input
			{...rest}
			onChange={onChange}
		/>

	);
};