import Link from "next/link";
import React from "react";

interface Props {
  style?: string;
  text: string;
}

export const Button = ({ style = "", text }: Props) => {
  return (
    <>
      {style === "primary" || style === "" ? (
        <button className="btn overflow-hidden relative w-34 bg-blue-500 text-white my-4 py-4 px-4 rounded-md font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-slate-300 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-white hover:before:animate-ping transition-all duration-300">
          <Link href={"/about"}>
            <span className="relative">{text}</span>
          </Link>
        </button>
      ) : (
        <button
          className=" my-4 middle none center mr-3 rounded-lg border border-blue-500 py-3 px-6 font-sans text-xs font-bold text-blue-500 transition-all hover:opacity-75 focus:ring focus:bg-blue-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          <span className="text-base">{text}</span>
        </button>
      )}
    </>
  );
};
