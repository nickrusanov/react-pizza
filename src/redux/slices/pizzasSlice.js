import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzas',
	async ({ filterCategory, filterSortBy, filterSearch }) => {
		const { data } = await axios.get(
			'https://645b67b599b618d5f31a49ab.mockapi.io/pizzas?' +
				filterCategory +
				filterSortBy +
				filterSearch
		);

		return data;
	}
);

const initialState = { items: [], status: 'loading' };

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: {
		[fetchPizzas.pending]: (state) => {
			state.items = [];
			state.status = 'loading';
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		},
		[fetchPizzas.rejected]: (state) => {
			state.status = 'error';
		},
	},
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
