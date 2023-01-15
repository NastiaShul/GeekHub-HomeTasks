import React, { useId } from "react";
import { useFormContext } from "../Form/Form";

import { FormNameField } from "./FormNameField/FormNameField"
import { FormInput } from "./FormInput/FormInput";
import { FormPasswordField } from "./FormPasswordField/FormPasswordField";
import { FormConfirmPasswordField } from "./FormConfirmPasswordField/FormConfirmPasswordField";
import { FormCheckboxes } from "./FormCheckboxes/FormCheckboxes";
import { SelectForm } from "./SelectForm/SelectForm";
import { FormEmailField } from "./FormEmailField/FormEmailField";
import { RadioForm } from "./RadioForm/RadioForm"
import { FormPhoneField } from "./FormPhoneField/FormPhoneField";


export const FormField = ({
	type = "text",
	id: propsId,
	label,
	name,
	required,
	...rest
}) => {
	const innerId = useId();
	const id = propsId || `FormField${innerId}`;


	const { isSubmitting, setValue, setError, errors } = useFormContext();

	const Component = useFromFieldComponent(type);

	const onChange = (value) => {
		setValue(name, value);
	};

	const onError = (errorMessage) => {
		setError(name, errorMessage);
	}

	const error = errors[name];

	return (
		<div className="form-field">
			{type !== "checkboxes" && (
				<label htmlFor={getInputId(id)}>{label}</label>
			)}
			<Component
				{...rest}
				id={type === "checkboxes" ? undefined : getInputId(id)}
				label={type === "checkboxes" ? label : undefined}
				type={type}
				name={name}
				onChange={onChange}
				onError={onError}
				disabled={isSubmitting}
				aria-describedby={getErrorId(innerId)}
				required={required}
			/>
			{error && (
				<span
					id={getErrorId(innerId)}
					style={{ color: "red" }}
					className="FormField__error">
					{error}
				</span>
			)}

		</div>
	);
};

function useFromFieldComponent(type) {
	switch (type) {
		case "name":
			return FormNameField;
		case "password":
			return FormPasswordField;
		case "confirmPassword":
			return FormConfirmPasswordField;
		case "checkboxes":
			return FormCheckboxes;
		case "select":
			return SelectForm;
		case "email":
			return FormEmailField;
		case "phone":
			return FormPhoneField;
		case "radio":
			return RadioForm;
		default:
			return FormInput;
	}
}

function getErrorId(id) {
	return `${id} Error`
}

function getInputId(id) {
	return `${id} Label`
}


