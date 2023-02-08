import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import SelectFormField from './SelectFormField';
import TextAreaFormField from './TextAreaFormField';
import TextFormField from './TextFormField';

interface ProductCategory {
	id: number;
	name: string;
	desc?: string;
}
[];

interface ProductFormValue {
	name: string;
	price: number;
	category_id: string;
	desc: string;
	image: string;
}

const ProductInitialValue: ProductFormValue = {
	name: '',
	price: 0,
	category_id: '',
	desc: '',
	image: '',
};

const ProductScheme = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Required'),
	price: yup.number().required('Required'),
	category_id: yup.number().required('Required'),
	desc: yup.string().max(128, 'Too Long!').nullable(),
	image: yup.string().nullable(),
});

const ProductForm = ({
	productCategory,
	handleSubmit,
}: {
	productCategory: ProductCategory[];
	handleSubmit: (values: any) => void;
}) => {
	return (
		<Formik
			validationSchema={ProductScheme}
			initialValues={ProductInitialValue}
			onSubmit={(values, {resetForm}) => {
				handleSubmit(values);
				resetForm({
					values: ProductInitialValue,
				});
			}}
		>
			{({
				values,
				handleChange,
				handleBlur,
				isSubmitting,
				errors,
				touched,
				isValid,
				dirty,
			}) => (
				<Form>
					<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div className="sm:col-span-2">
							<Field
								name="name"
								value={values.name}
								label="Product Name *"
								type="text"
								id="name"
								onChange={handleChange}
								onBlur={handleBlur}
								required
								autoComplete="off"
								className={`bg-gray-50 border text-gray-900 text-sm rounded-lg   block w-full p-2.5 ${
									errors.name && touched.name
										? ' border-red-500 focus:border-red-600 focus:ring-red-600'
										: ' border-gray-300 focus:border-primary-600 focus:ring-primary-600'
								}`}
								placeholder="Type product name"
								component={TextFormField}
								error={errors.name}
							/>
						</div>
						<div className="w-full">
							<Field
								name="price"
								value={values.price}
								type="number"
								id="price"
								required
								onChange={handleChange}
								onBlur={handleBlur}
								label="Price *"
								className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5" ${
									errors.price && touched.price
										? ' border-red-500 focus:border-red-600 focus:ring-red-600'
										: ' border-gray-300 focus:border-primary-600 focus:ring-primary-600'
								}`}
								component={TextFormField}
								error={errors.name}
							/>
						</div>
						<div>
							<Field
								name="category_id"
								id="category_id"
								options={productCategory}
								label="Category *"
								onChange={handleChange}
								onBlur={handleBlur}
								required
								className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 ${
									errors.category_id && touched.category_id
										? ' border-red-500 focus:border-red-600 focus:ring-red-600'
										: ' border-gray-300 focus:border-primary-600 focus:ring-primary-600'
								}`}
								component={SelectFormField}
								error={errors.name}
							/>
						</div>
						<div className="sm:col-span-2">
							<Field
								name="image"
								value={values.image}
								type="file"
								id="image"
								onChange={handleChange}
								onBlur={handleBlur}
								label="Upload Image"
								className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
								component={TextFormField}
								aria-describedby="file_input_help"
								error={errors.name}
							/>
						</div>
						<div className="sm:col-span-2">
							<Field
								name="desc"
								value={values.desc}
								id="desc"
								rows={8}
								label="Description"
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="Your description here"
								className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
									errors.desc && touched.desc
										? ' border-red-500 focus:border-red-600 focus:ring-red-600'
										: ' border-gray-300 focus:border-primary-600 focus:ring-primary-600'
								} `}
								component={TextAreaFormField}
								error={errors.name}
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={!dirty || !isValid}
						className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded-lg ${
							!dirty && !isValid && isSubmitting
								? 'opacity-50 cursor-not-allowed bg-neutral-500 '
								: 'bg-primary-700 focus:ring-4 focus:ring-primary-200 hover:bg-primary-800'
						}}`}
					>
						Add product
					</button>
					<pre>{JSON.stringify(values, null, 2)}</pre>
				</Form>
			)}
		</Formik>
	);
};

export default ProductForm;
