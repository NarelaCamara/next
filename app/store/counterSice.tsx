import { createSlice } from "@reduxjs/toolkit";



const initialState = {
	count: 5,
};

const counterSice = createSlice({
	name: "counter",
	initialState,
	reducers: {},
});

export const {} = counterSice.actions;

export default counterSice.reducer;
