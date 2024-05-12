import { URL_API } from "@/app/helpers/constants";
import { Metadata } from "next";

interface Props {
	params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const pokemon = await getPokemon(params.id);

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

	return (
		<div>
			<p>Pokemon {pokemon.name}</p>
		</div>
	);
}
