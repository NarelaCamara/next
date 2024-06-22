import Image from "next/image";
import React from "react";
import { Paragraph } from "../paragraph/Paragraph";
import { Button } from "../button/Button";

interface Props {
  image?: any;
}

export const Card = ({ image }: Props) => {
  return (
    <div className=" w-1/3 h-2/3 m-4 bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl  cursor-pointer border">
      <div className="p-6 flex flex-col">
        <p className="justify-start mt-4 text-base font-bold">2020/01</p>
        <span className="text-2xl font-bold mt-0 mb-8">Semi Senior Frontend</span>
        <span className="text-2xl font-bold">Accenture</span>
        {image && <Image alt="User_photo" className=" w-2/3" src={image} />}
        <Paragraph
          paragraph="Consequuntur nesciunt.
    Neque porro quisquam est, qui dolorem. Consequuntur Neque porro quisquam est, qui dolorem."
        />
        <Paragraph
          paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    Neque porro quisquam est,."
        />
        <Paragraph
          paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    Neque porro quisquam est."
        />
      </div>
      <div className="p-6 pt-0">
        <Button text={"Ver más!"} style="second" />
      </div>
    </div>
  );
};
