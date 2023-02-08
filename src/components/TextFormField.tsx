import { ErrorMessage, FieldProps } from 'formik';

const TextFormField: React.FC<
	FieldProps & { label: string; error: string }
> = ({ field, form, label, error, ...props }) => {
	return (
		<>
			<label
				htmlFor={field.name}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{label}
			</label>
			<input {...props} {...field} />
			<ErrorMessage
				name={field.name}
				component="p"
				className="text-red-500 text-xs italic"
			/>
		</>
	);
};

export default TextFormField;
