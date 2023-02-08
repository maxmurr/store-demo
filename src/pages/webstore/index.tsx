import ProductForm from '@/components/ProductForm';
import { addProduct } from '@/features/productSlice';
import { selectProduct } from '@/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ProductCategory {
	id: number;
	name: string;
	desc?: string;
}

interface Product {
	name: string;
	price: number;
	category_id: number;
	desc?: string;
	image?: string;
}

export default function Payment() {
	const [data, setData] = useState<ProductCategory[]>([]);
	const products = useSelector(selectProduct);

	const dispatch = useDispatch();

	const onAddProduct = (payload: Product) => {
		dispatch(
			addProduct({
				...payload,
				category_id: parseInt(payload.category_id.toString()),
			})
		);
	};

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get(
				'http://localhost:3000/api/v1/productCategories'
			);
			setData(data);
		};
		getProducts();
	}, []);

	return (
		<section className=" dark:bg-gray-900 md:ml-64 h-screen">
			<div className="p-8 mx-auto max-w-2xl lg:py-16">
				<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
					Add a new product
				</h2>
				<ProductForm
					productCategory={data}
					handleSubmit={(values) => onAddProduct(values)}
				/>
			</div>
		</section>
	);
}
{
	/* <section className="dark:bg-gray-900 md:ml-64">
				<div className="p-8 mx-auto max-w-2xl lg:py-16">
					<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
						Create a new category
					</h2>
					<form action="#">
						<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
							<div className="sm:col-span-2">
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Category Name
								</label>
								<input
									autoComplete="off"
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type category name"
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="description"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Description
								</label>
								<textarea
									id="description"
									rows={8}
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Your description here"
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
						>
							Add product
						</button>
					</form>
				</div>
			</section> */
}
function state(state: unknown): unknown {
	throw new Error('Function not implemented.');
}
