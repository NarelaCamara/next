import Image from "next/image";
import React from "react";
import { Card } from "../card/Card";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotFillIcon,
  DotIcon,
} from "@primer/octicons-react";

interface Props {
  image: any;
}

export const Carousel = ({ image }: Props) => {
  return (
    <section className="p-4 w-10/12">
      <div className="w-full flex flex-row-reverse flex-nowrap bg-white m-8 ">
        <div className="flex flex-row flex-nowrap">
          <DotFillIcon size={16} className="opacity-60" />
          <DotFillIcon size={16} className="opacity-60" />
          <DotIcon size={16} className="opacity-60" />
        </div>
      </div>

      <div className=" flex items-center">
        <button className="middle none center h-12 min-h-[48px] w-12 min-w-[48px] rounded-full bg-slate-600 font-sans text-sm font-bold uppercase text-white shadow-md bg-slate-600/20 transition-all hover:shadow-lg hover:bg-slate-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <ChevronLeftIcon size={24} />
        </button>

        <div className="flex flex-row p-4 ">
          <Card image={image} />
          <Card image={image} />
          <Card image={image} />
        </div>

        <button className="middle none center h-12 min-h-[48px] w-12 min-w-[48px] rounded-full bg-slate-600 font-sans text-sm font-bold uppercase text-white shadow-md bg-slate-600/20 transition-all hover:shadow-lg hover:bg-slate-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </section>
  );
};
