import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 5,
};

const counterSice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addOne(state) {
			state.count++;
		},
		removeOne(state) {
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

export const { addOne, removeOne, resetCounter } = counterSice.actions;

export default counterSice.reducer;
