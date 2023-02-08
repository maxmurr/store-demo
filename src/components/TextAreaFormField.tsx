import { ErrorMessage, FieldProps } from 'formik';
import React from 'react';

const TextAreaFormField: React.FC<
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
			<textarea {...field} {...props}></textarea>
			<ErrorMessage
				name={field.name}
				component="p"
				className="text-red-500 text-xs italic"
			/>
		</>
	);
};

export default TextAreaFormField;
