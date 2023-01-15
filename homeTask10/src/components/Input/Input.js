import React from "react";

export const Input = ({className,  error, ...rest }) => {
	return (
		<>
		<span className="error-message">{error}</span>
			<input
				{...rest}
				className={`${className ? className : ""}`}
			/>
		</>
	);
};