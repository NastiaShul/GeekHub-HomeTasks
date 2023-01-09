import React, { useId, useContext } from "react";
import { Input } from "../components/fields/Input";
import { FormContext } from "../components/Form";
import { Select } from "../components/fields/Select";
import { Radio } from "../components/fields/Radio";
import { Checkbox } from "./fields/Checkboxes";
import { Password } from "./fields/Password";


export const FormField = ({
	type = "text",
	id: propsId,
	label,
	...rest
}) => {
	const innerId = useId();
	const id = propsId || `FormField${innerId}`;

	const { isSubmitting } = useContext(FormContext);

	const Component = useFromFieldComponent(type);

	return (
		<div className="form-field">
			<label htmlFor={id}>{label}</label>
			<Component
				{...rest}
				id={id}
				type={type}
				disabled={isSubmitting}
			/>
		</div>
	);
};

function useFromFieldComponent(type) {
	switch (type) {
		case "password":
			return Password;
		case "select":
			return Select;
		case "radio":
			return Radio;
		case "checkboxes":
			return Checkbox;
		default:
			return Input;
	}
}