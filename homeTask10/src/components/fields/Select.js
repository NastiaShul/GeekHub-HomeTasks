import React from "react";

export const Select = ({ options, ...rest }) => {
	return (
		<select {...rest}>
			{options.map(({ value, label }) =>
				<option key={value} value={value}>{label}</option>)}
		</select>
	);
};