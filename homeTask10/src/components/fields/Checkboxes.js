import React from "react";
import { Input } from "./Input";

export const Checkbox = ({ options, name, error, ...rest }) => {
	return (
		<>
			{options.map(({ value, label }) =>
				<div key={value} className="checkboxes">
					<Input id={value} value={value} name={name} type="checkbox" />
					<label htmlFor={value}>{label}</label>
				</div>
			)}
			<div className="error-message">{error}</div>
		</>
	);
};