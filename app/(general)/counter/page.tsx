"use client";
import { CartCounter } from "@/app/components";
import * as React from "react";

export interface IPageProps {}

export default function CounterPage(props: IPageProps) {
  return (
    <>
      <div className="flex flex-col items-center jutify-center w-full h-full">
        <span> Productos en el carrito</span>
        <CartCounter />
      </div>
    </>
  );
}
