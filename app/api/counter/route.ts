export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
	return Response.json({ data: "Nare", count: 100 });
}
