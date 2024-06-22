import React from "react";
import { Button } from "../button/Button";

interface Props {}

export const Navigation = (props: Props) => {
  return (
    <div className="w-full -top-0 flex flex-row-reverse flex-nowrap bg-white fixed ">
      <div className=" w-1/2 flex flex-row justify-around items-center ">
        <span className="text-xl font-bold">Acerca de mi</span>
        <span className="text-xl font-bold">Servicios</span>
        <span className="text-xl font-bold">Portafolio</span>
        <Button text={"Contactame!"} />
      </div>
    </div>
  );
};
