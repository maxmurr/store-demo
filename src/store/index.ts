import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../features/productSlice';

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
	},
});

type RootState = ReturnType<typeof store.getState>;

export const selectProduct = (state: RootState) => state.product;

export type AppDispatch = typeof store.dispatch;
