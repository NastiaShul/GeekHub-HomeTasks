import React, { useState, useRef } from "react";
import { Form } from '../Form/Form';
import { FormField } from '../FormField/FormField';
import { FormSubmit } from "../FormSubmit.js/FormSubmit";

export const EditUserProfile = () => {

	const onSubmit = (values) => {
		console.log("onSubmit", values);
	};


	return (
		<Form onSubmit={onSubmit} style={{ maxWidth: "20rem", margin: "2rem auto" }}>
			{({ values, errors }) => {
				return (
					<fieldset>
						<legend>
							Edit Profile
						</legend>
						<FormField
							required
							label="First name"
							name="firstName"
							type="name"
							placeholder="Type here..."
						/>
						<FormField
							required
							label="Last name"
							name="lastName"
							type="name"
							placeholder="Type here..."
						/>
						<FormField
							required
							type="email"
							name="email"
							label="Email"
							placeholder="Type here..."
						/>
						<FormField
							required
							type="phone"
							name="phone"
							label="Phone"
							placeholder="Type here..."
						/>
						<FormField
							required
							type="checkboxes"
							name="race"
							options={[
								{ value: 'unspecified', label: 'Not Reported' },
								{ value: 'preferUnspecified', label: 'Prefer not to answer' },
								{ value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE', label: 'American Indian or Alaska Native' },
								{ value: 'ASIAN', label: 'Asian' },
								{ value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American' },
								{ value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER', label: 'Native Hawaiian or Other Pacific Islander' },
								{ value: 'WHITE', label: 'White' }
							]}
						/>
						<FormSubmit />
					</fieldset>
				)
			}}
		</Form>
	);
};
