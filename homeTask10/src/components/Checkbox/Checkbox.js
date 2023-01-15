import React, { useId } from "react";

export const Checkbox = ({
	label,
	...rest
}) => {
	const id = useId();
	return (
		<>
			<label htmlFor={id}>
				<input
					{...rest}
					id={id}
					type="checkbox" />
				{label}
			</label>
		</>

	);
}