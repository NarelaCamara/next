import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 5,
	isReady: false,
};

const counterSice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		initCounter(state, action) {
			if (state.isReady) return;
			state.count = action.payload;
			state.isReady = true;
		},
		addOne(state) {
			state.count++;
		},
		removeOne(state) {
			if (state.count === 0) return;
			state.count--;
		},
		resetCounter(state, action) {
			if (action.payload < 0) {
				action.payload = 0;
			}
			state.count = action.payload;
		},
	},
});

export const { addOne, removeOne, resetCounter, initCounter } =
	counterSice.actions;

export default counterSice.reducer;
