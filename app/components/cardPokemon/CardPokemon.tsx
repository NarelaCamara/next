import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { IoHeartOutline } from "react-icons/io5";

export interface ICardPokemonProps {
	name: string;
	id: string;
	url: string;
}

export function CardPokemon({ name, id, url }: ICardPokemonProps) {
	return (
		<div className='mx-auto right-0 mt-2 w-60'>
			<div className='bg-white rounded overflow-hidden shadow-lg'>
				<div className='text-center p-6 bg-gray-800 border-b'>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						alt={name}
						aria-hidden='true'
						role='img'
						className='h-24 w-24 text-white rounded-full mx-auto'
						width='32'
						height='32'
						priority={false}
					/>

					<p className='pt-2 text-lg font-semibold text-gray-50'>{name}</p>

					<div className='mt-5'>
						<a className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'>
							Manage your Account
						</a>
					</div>
				</div>
				<div className='border-b'>
					<Link
						href={`/pokemon/${id}`}
						className='px-4 py-2 hover:bg-gray-100 flex justify-center'>
						<div className='text-red-600'>
							<IoHeartOutline />
						</div>
						<div className='pl-3'>
							<p className='text-sm font-medium text-gray-800 leading-none'>
								Favorito
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
