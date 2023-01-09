import React, { useState, useRef, useImperativeHandle } from 'react';

export const FormContext = React.createContext({
	isSubmitting: false
});

export const Form = React.forwardRef(({
	onSubmit: propsOnSubmit,
	children,
	...rest
}, ref) => {

	const formRef = useRef();
	const submitRef = useRef();

	useImperativeHandle(ref, () => ({
		submit: () => {
			submitRef.current.click();
		}
	}));

	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(formRef.current);
		const values = serialize(formData);

		try {
			if (propsOnSubmit) {
				await propsOnSubmit(values);
			}
		} catch (error) {
			console.log(error);
			alert("The requested action was not successful");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<FormContext.Provider value={{ isSubmitting }}>
			<form
				{...rest}
				ref={formRef}
				onSubmit={onSubmit}
			>
				{typeof children === "function" ? children({ isSubmitting }) : children}
				<input ref={submitRef} type="submit" hidden/>
			</form>
		</FormContext.Provider>

	);
});

function serialize(data) {
	let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}