"use client";
import { configureStore } from "@reduxjs/toolkit";
import * as React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import counterSice from "./counterSice";
export const store = configureStore({
	reducer: {
		counterSice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IProvidersProps {
	children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
	return <Provider store={store}>{children}</Provider>;
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
