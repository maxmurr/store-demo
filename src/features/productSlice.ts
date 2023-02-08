import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
	name: string;
	desc?: string;
	category_id: number;
	price: number;
	image?: string;
}

interface ProductSlice {
	productCategory: Product[];
}

const initialState: ProductSlice = {
	productCategory: [],
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<Product>) => {
			axios
				.post('http://localhost:3000/api/v1/products', action.payload)
				.then((res) => {
					console.log(res);
					console.log(res.data);
				});
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			axios
				.delete(`http://localhost:3000/api/v1/products/${action.payload}`)
				.then((res) => {
					console.log(res);
					console.log(res.data);
				});
		},
	},
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
