import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	category: 'Все',
	sort: 'rating',
	page: 1,
	isFilterLoaded: false,
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategory(state, action) {
			state.category = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setPage(state, action) {
			state.page = action.payload;
		},
		setFilters(state, action) {
			state.category = action.payload.category
				? action.payload.category
				: 'Все';
			state.sort = action.payload.sort;
			state.page = action.payload.page;
			state.isFilterLoaded = true;
		},
	},
});

export const { setCategory, setSort, setPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
