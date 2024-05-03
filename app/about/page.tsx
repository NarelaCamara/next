import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nare App",
	description: "About Nare",
};

export default function AboutPage() {
	return (
		<>
			<span className='text-7xl'>About</span>
		</>
	);
}
