import React from "react";
import { ButtonPrimary } from "../buttonPrimary/ButtonPrimary";

interface Props {}

export const Navigation = (props: Props) => {
  return (
    <div className="flex flex-row-reverse flex-nowrap bg-white">
      <div className=" w-1/2 flex flex-row justify-around items-center ">
        <span className="text-xl font-bold">Acerca de mi</span>
        <span className="text-xl font-bold">Servicios</span>
        <span className="text-xl font-bold">Portafolio</span>
        <ButtonPrimary text={"Contactame!"} />
      </div>
    </div>
  );
};
