import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
	const ITEMS = ["about", "pricing", "contact"];

	const capitalize = (word: string) => {
		return word[0].toUpperCase() + word.slice(1);
	};

	return (
		<nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2'>
			<Link className='mr-2' href='/'>
				<HomeIcon size={24} className='mr-2' />
				<span>Home</span>
			</Link>
			<div className='flex flex-1'></div>

			{ITEMS.map((e) => (
				<Link key={e} className='mr-2' href={`/${e}`}>
					{capitalize(e)}
				</Link>
			))}
		</nav>
	);
};
