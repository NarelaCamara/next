"use client";
import { Metadata } from "next";
import * as React from "react";

export interface IPageProps {}

export default function CounterPage(props: IPageProps) {
  const [count, setCount] = React.useState(5);
  return (
    <div className="flex flex-col items-center jutify-center w-full h-full">
      <span> Productos en el carrito</span>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}
