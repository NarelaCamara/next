import { URL_API } from "@/app/helpers/constants";
import { Metadata } from "next";
import React from "react";

interface Props {
	params: { id: string };
}

export async function generateMetada({ params }: Props): Promise<Metadata> {
	const pokemon = await getPokemon(params.id);
	console.log(pokemon);
	return {
		title: `#${params.id} -${pokemon.name}`,
		description: `Pokemon ${pokemon.name}`,
	};
}

const getPokemon = async (id: string) => {
	const pokemon = await fetch(`${URL_API}/pokemon/${id}`, {
		cache: "force-cache",
	})
		.then((resp) => resp.json())
		.catch((error) => error);
	return pokemon;
};

export default async function PokemonPage({ params }: Props) {
	const pokemon = await getPokemon(params.id);
	console.log(pokemon);

	return (
		<div>
			<p>Pokemon {pokemon.name}</p>
		</div>
	);
}
