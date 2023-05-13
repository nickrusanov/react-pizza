import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	priceTotal: 0,
	itemsCount: 0,
};

const checkItem = (item, payload) => {
	if (item.id !== payload.id) {
		return false;
	}

	if (item.size !== payload.size) {
		return false;
	}

	if (item.dough !== payload.dough) {
		return false;
	}

	return true;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const itemIndex = state.items.findIndex((item) =>
				checkItem(item, action.payload)
			);

			itemIndex !== -1
				? state.items[itemIndex].amount++
				: state.items.push(action.payload);

			state.priceTotal += action.payload.price;
			state.itemsCount++;
		},
		removeItem(state, action) {
			const itemIndex = state.items.findIndex((item) =>
				checkItem(item, action.payload)
			);

			state.priceTotal -= action.payload.price * action.payload.amount;
			state.itemsCount -= action.payload.amount;

			state.items = state.items.filter((item, index) => index !== itemIndex);
		},
		decAmount(state, action) {
			const itemIndex = state.items.findIndex((item) =>
				checkItem(item, action.payload)
			);

			state.priceTotal -= action.payload.price;
			state.itemsCount--;

			state.items[itemIndex].amount--;
		},
		clearItems(state) {
			state.items = [];
			state.priceTotal = 0;
			state.itemsCount = 0;
		},
	},
});

export const { addItem, removeItem, clearItems, decAmount } = cartSlice.actions;

export default cartSlice.reducer;
