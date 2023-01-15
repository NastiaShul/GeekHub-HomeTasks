import { useFormContext } from "../Form/Form"

export const FormSubmit = () => {
	const { isValid, values } = useFormContext()
	return (
		<button 
		type="submit" 
		disabled={!isValid || Object.keys(values).length === 0}>
			Submit
		</button>
	)
}