import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Main",
  description: "Main",
};
const URL_API = "https://pokeapi.co/api/v2/";

const getPokemons = async (cantidad: number) => {
  let n = await fetch(`${URL_API}pokemon?limit=${cantidad}&offset=0`)
    .then((resp) => resp)
    .catch((error) => error);
  console.log(n);
  return n;
};

export interface IPageProps {}

export default async function MainPage(props: IPageProps) {
  let n = getPokemons(12);
  console.log(n);

  return <div>nare</div>;
}
