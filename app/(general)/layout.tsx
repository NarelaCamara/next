import { NavBar } from "@/components";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavBar />
			<main className='flex flex-col items-center p-24'>
				<span className='text-lg'>Hello root Layout About</span>
				{children}
			</main>
		</>
	);
}
