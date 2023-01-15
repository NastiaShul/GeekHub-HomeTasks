import React from "react";

import { Form } from '../Form/Form';
import { FormField } from '../FormField/FormField';
import { FormSubmit } from "../FormSubmit.js/FormSubmit";

export const ChangePassword = () => {
	const onSubmit = (values) => {
		console.log("onSubmit", values);
	}

	return (
		<Form onSubmit={onSubmit} style={{ maxWidth: "20rem", margin: "2rem auto" }}>
			<fieldset>
				<legend>
					Change password
				</legend>
				<FormField
					required
					label="New password"
					name="password"
					type="password"
					placeholder="Type here..."
				/>
				<FormField
					required
					type="confirmPassword"
					name="confirmPassword"
					label="Confirm password"
					placeholder="Type here..."
				/>
				<FormSubmit />
			</fieldset>
		</Form>
	);
};



