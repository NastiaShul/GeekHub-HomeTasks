import React, { useState, useRef, useContext, useEffect } from "react";
import { FormContext } from "../components/Form";
import { Form } from '../components/Form';
import { FormField } from '../components/FormField';
import { validName } from '../components/utils/validName';
import { validEmail } from '../components/utils/validEmail';
import { validPhone } from '../components/utils/validPhone';

export const EditUserProfile = () => {
	const [isGroupAccount, setIsGroupAccount] = useState(false);
	const [errors, setErrors] = useState({});
	const { isSubmitting } = useContext(FormContext);
	

	const onSubmit = async (values) => {
		const tempErr = {
			firstName: validName(values.firstName),
			lastName: validName(values.lastName),
			email: validEmail(values.email),
			phone: validPhone(values.phone),
			race: values.race?.length ? undefined : 'Select any values'
		};

		const hasErrors = Object.keys(tempErr).map(err => tempErr[err]).some(err => err);
		if (hasErrors) {
			setErrors(tempErr);
			console.log('Has errors, no value to save');
		} else {
			console.log('Saved values:', values);
			await new Promise((resolve) => setTimeout(resolve, 2000));
		}
	};

	const formRef = useRef();

	const handleChange = () => {
		setIsGroupAccount((isGroupAccount) => !isGroupAccount);
	}

	useEffect( () => () => {
		if(isSubmitting) {
			setIsGroupAccount(false);
			setErrors({});
		}
	}, [ isSubmitting ] );

	return (
		<div className="form">
			<fieldset>
				<legend>
					Edit Profile
				</legend>
				<FormField
					required
					name="accountType"
					type="checkbox"
					onChange={handleChange}
					label="Group Account"
					className="checkbox"
				/>
				<Form ref={formRef} onSubmit={onSubmit}>
				{({ isSubmitting }) => (
					<>
					{isGroupAccount ? (
						<FormField
							required
							type="text"
							name="title"
							label="Title"
						/>
					) : (
						<>
							<FormField
								required
								type="name"
								name="firstName"
								label="First Name"
								placeholder="John"
								error={errors.firstName}
							/>
							<FormField
								required
								type="name"
								name="lastName"
								label="Last Name"
								placeholder="Smite"
								error={errors.lastName}
							/>
						</>
					)}
					<FormField
						required
						type="email"
						name="email"
						label="Email"
						placeholder="Type here..."
						error={errors.email}
					/>
					<FormField
						required
						type="phone"
						name="phone"
						label="Phone"
						placeholder="Type here..."
						error={errors.phone}
					/>
					<FormField
						required
						type="select"
						name="gender"
						label="Gender"
						options={[
							{ value: 'male', label: 'Male' },
							{ value: 'female', label: 'Female' },
							{ value: 'other', label: 'Unspecified or Nonbinary' }
						]}
					/>
					<FormField
						required
						type="radio"
						name="prefer"
						label="What do you prefer?"
						defaultChecked="cola"
						options={[
							{ value: 'pepsi', label: 'Pepsi' },
							{ value: 'cola', label: 'Cola' }
						]}
					/>
					<FormField
						required
						type="checkboxes"
						name="race"
						label="Your race?"
						options={[
							{ value: 'unspecified', label: 'Not Reported' },
							{ value: 'preferUnspecified', label: 'Prefer not to answer' },
							{ value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE', label: 'American Indian or Alaska Native' },
							{ value: 'ASIAN', label: 'Asian' },
							{ value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American' },
							{ value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER', label: 'Native Hawaiian or Other Pacific Islander' },
							{ value: 'WHITE', label: 'White' }
						]}
						error={errors.race}
					/>
					<FormField
						required
						name="consent"
						type="checkbox"
						label={(
							<>
								By checking this box, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
							</>
						)}
					/>
					<button type="submit" disabled={isSubmitting} className="submit-btn">
						Submit
					</button>
					</>
					)}
				</Form>
			</fieldset>
		</div>
	);
};
