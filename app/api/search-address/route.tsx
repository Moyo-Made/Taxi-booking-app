import { NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";
export async function GET(request: any) {
	const { searchParams } = new URL(request.url);

	const searchText = searchParams.get("q");

	const res = await fetch(
		`${BASE_URL}?q=${searchText}&session_token=eJwrLkrWTyzI1M9IzEvJSS0q1i9LzMlMSSxJ1Ssq1jU1BgC8EgtT&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const searchResult = await res.json();
	return NextResponse.json({ searchResult });
}
