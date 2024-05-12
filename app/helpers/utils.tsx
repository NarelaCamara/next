import { notFound } from "next/navigation";
import { URL_API } from "./constants";

export const getPokemons = async (cantidad: number) => {
	const data: { results: [] } = await fetch(
		`${URL_API}/pokemon?limit=${cantidad}&offset=0`
	)
		.then((resp) => resp.json())
		.catch((error) => error);

	const pokemons = data?.results?.map((e: any) => {
		return {
			...e,
			id: e.url.split("/").at(-2)!,
		};
	});
	return pokemons;
};

export const getPokemonForId = async (id: string) => {
	const pokemon = await fetch(`${URL_API}/pokemon/${id}`, {
		next: {
			revalidate: 60 * 60 * 30 * 6,
		},
	})
		.then((resp) => resp.json())
		.catch(() => notFound());
	return pokemon;
};

export const getPokemonForName = async (id: string) => {
	const pokemon = await fetch(`${URL_API}/pokemon/${id}`, {
		next: {
			revalidate: 60 * 60 * 30 * 6,
		},
	})
		.then((resp) => resp.json())
		.catch(() => notFound());
	return pokemon;
};
