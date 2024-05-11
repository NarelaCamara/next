import { CardPokemon } from "@/app/components/cardPokemon/CardPokemon";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
	title: "Main",
	description: "Main",
};
const URL_API = "https://pokeapi.co/api/v2/";

const getPokemons = async (cantidad: number) => {
	const { results } = await fetch(
		`${URL_API}pokemon?limit=${cantidad}&offset=0`,
		{
			cache: "no-store",
		}
	)
		.then((resp) => resp)
		.catch((error) => error);

	const pokemons =
		(!!results &&
			results.map((e: any) => {
				return {
					id: e.url.split("/").at(-2)!,
					...e,
				};
			})) ||
		[];
	return pokemons;
};

export interface IPageProps {}

export default async function MainPage(props: IPageProps) {
	const pokemons = await getPokemons(52);

	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2'> Pokemons </span>
			<div className='flex flex-wrap gap-10 items-center justify-center'>
				{pokemons.map((elem: any) => (
					<CardPokemon key={elem.name} {...elem} />
				))}
			</div>
		</div>
	);
}
