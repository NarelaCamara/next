"use client";
import { configureStore } from "@reduxjs/toolkit";
import * as React from "react";
import { Provider } from "react-redux";
export const store = configureStore({
	reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IProvidersProps {
	children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
	return <Provider store={store}>{children}</Provider>;
};
