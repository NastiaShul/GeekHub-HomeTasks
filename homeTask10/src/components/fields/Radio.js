import React from "react";
import { Input } from "./Input";


export const Radio = ({ options, name, defaultChecked, ...rest }) => {
	return (
		<div className="radio">
			{options.map(({ value, label }) =>
				<div key={value} className="radio">
					<Input id={value} 
					value={value} 
					name={name} 
					type="radio" 
					defaultChecked={value === defaultChecked} />
					<label htmlFor={value}>{label}</label>
				</div>
			)}
		</div>
	);
};