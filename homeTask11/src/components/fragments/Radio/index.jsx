import React from "react";

export const Radio = ({ options, name, defaultChecked, ...rest }) => {
	return (
		<>
			{options.map(({ value, label }) =>
				<div key={value}>
					<input
						id={value}
						value={value}
						name={name}
						type="radio"
						defaultChecked={value === defaultChecked}
						{...rest}
					/>
					<label htmlFor={value}>{label}</label>
				</div>
			)}
		</>
	);
};