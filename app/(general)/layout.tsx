import { Sidebar } from "@/app/components";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Sidebar />
			{children}
		</>
	);
}
