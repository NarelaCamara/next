"use client";
import { CartCounter } from "@/app/components";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Counter",
  description: "Counter",
};

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
