import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
	return (
		<nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2'>
			<Link className='mr-2' href='/'>
				<HomeIcon size={24} />
				<span>Home</span>
			</Link>
			<div className='flex flex-1'></div>
			<Link className='mr-2' href='/about'>
				About
			</Link>
			<Link className='mr-2' href='/pricing'>
				Pricing
			</Link>
			<Link className='mr-2' href='/contact'>
				Contact
			</Link>
		</nav>
	);
};
