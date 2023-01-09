import React, {useState, useRef, useContext } from "react";

import { Form } from '../components/Form';
import { FormField } from '../components/FormField';
import { validPass } from "../components/utils/validPass";

export const ChangePass = () => {
	const [errors, setErrors] = useState({});

	const onSubmit = async (values) => {	
		setErrors({});
		const pass = values.password;
		const passConfirm = values.confirmPassword;
		const tempErr = {
			password: validPass(values.password)
		}
		if(tempErr.password){
			setErrors(tempErr); 
			console.log('Password Error');
			return;
		}
		if(passConfirm !== pass){
			setErrors((errors)=>({...errors, different: "Confirm password is not same"}));
			console.log('Confirm password is not same')
			return;
		}

		await new Promise((resolve) => setTimeout(resolve, 2000));
	};

	const formRef = useRef();

	return (
		<div className="form">
			<Form ref={formRef} onSubmit={onSubmit}>
				{({ isSubmitting }) => (
					<fieldset>
						<legend>
							Change password
						</legend>
						<span className="error-message">{errors.password}</span>
						<FormField
							required
							label="New password"
							name="password"
							type="password"
						/>
						<span className="error-message">{errors.different}</span>
						<FormField
							required
							type="password"
							name="confirmPassword"
							label="Confirm new password"
						/>
						<button type="submit" disabled={isSubmitting} className="submit-btn">
							Submit
						</button>
					</fieldset>
				)}
			</Form>
		</div>
	);
};



