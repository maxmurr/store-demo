import { ErrorMessage, FieldProps } from 'formik';
import React from 'react';

interface ProductCategory {
	id: number;
	name: string;
	desc?: string;
}
[];

const SelectFormField: React.FC<
	FieldProps & {
		label: string;
		options: ProductCategory[];
		error: string;
	}
> = ({ field, form, label, options, error, ...props }) => {
	return (
		<>
			<label
				htmlFor={field.name}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{label}
			</label>
			<select {...field} {...props}>
				<option defaultValue={'Select category'} value={''}>
					Select category
				</option>
				{options.map((category) => {
					return (
						<option value={category.id} key={category.id}>
							{category.name}
						</option>
					);
				})}
			</select>

			<ErrorMessage
				name={field.name}
				component="p"
				className="text-red-500 text-xs italic"
			/>
		</>
	);
};

export default SelectFormField;
