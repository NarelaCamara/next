import { NavBar, Sidebar } from "@/components";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{//<NavBar />
}
			<div className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
				<div className='flex'>
					<Sidebar/>
					<main className='flex flex-col items-center p-24'>
					{children}
					</main>
				</div>
			</div>
			
		</>
	);
}
