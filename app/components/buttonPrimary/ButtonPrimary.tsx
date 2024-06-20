import React from "react";

interface Props {
  text: string;
}

export const ButtonPrimary = ({ text }: Props) => {
  return (
    <button className="btn overflow-hidden relative w-34 bg-blue-500 text-white m-4 py-4 px-4 rounded-md font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-slate-300 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-white hover:before:animate-ping transition-all duration-300">
      <span className="relative">{text}</span>
    </button>
  );
};
