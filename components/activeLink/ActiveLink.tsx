"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props {
	word: string;
}

export const ActiveLink = ({ word }: Props) => {
	const capitalize = (word: string) => {
		return word[0].toUpperCase() + word.slice(1);
	};

	const pathName = usePathname();
	console.log(pathName);
	return (
		<Link
			key={word}
			className={`${style.link} ${pathName === word && style["active-link"]}`}
			href={`/${word}`}>
			{capitalize(word)}
		</Link>
	);
};
