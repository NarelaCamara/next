import { CardPokemon } from "@/app/components/cardPokemon/CardPokemon";
import { getPokemons } from "@/app/helpers/utils";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
	title: "Main",
	description: "Main",
};

export interface IPageProps {}

export default async function MainPage(props: IPageProps) {
	const pokemons = await getPokemons(22);

	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2'> Pokemons </span>
			<div className='flex flex-wrap gap-10 items-center justify-center'>
				{pokemons?.map((elem: any) => (
					<CardPokemon key={elem.name} {...elem} />
				))}
			</div>
		</div>
	);
}
