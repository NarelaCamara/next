"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/Providers";
import { addOne, removeOne } from "@/app/store/counterSice";
import * as React from "react";

export interface ICartCounterProps {
	count: number;
}

export const CartCounter = () => {
	const count = useAppSelector((state) => state.counter.count);
	const dispatch = useAppDispatch();
	//const [count, setCount] = React.useState(5);

	return (
		<>
			<span className="text-9xl">{count}</span>
			<div className="flex">
				<button
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
					onClick={() => dispatch(addOne())}>
					+1
				</button>

				<button
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
					onClick={() => dispatch(removeOne())}>
					-1
				</button>
			</div>
		</>
	);
};
