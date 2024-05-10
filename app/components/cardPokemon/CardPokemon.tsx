import Image from "next/image";
import * as React from "react";

export interface ICardPokemonProps {
	name: string;
	id: string;
	url: string;
}

export function CardPokemon({ name, id, url }: ICardPokemonProps) {
	return (
		<div className='right-0 mt-2 w-60 mx-4 my-4'>
			<div className='bg-white rounded overflow-hidden shadow-lg'>
				<div className='text-center p-6 bg-gray-800 border-b'>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						width={100}
						height={100}
						alt={name}
					/>
					<p className='pt-2 text-lg font-semibold text-gray-50'>{name}</p>
					<p className='text-sm text-gray-100'>John@Doe.com</p>
					<div className='mt-5'>
						<a className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'>
							Manage your Account
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
