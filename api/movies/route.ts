import { NextResponse } from "next/server";
import { getAllMovies } from "@/lib/data";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get("q")?.trim() ?? "";

    let movies = getAllMovies();

    if(q) {
        const needle = q.toLowerCase();
        movies = movies.filter(
            (c) => c.title.toLowerCase().includes(needle)
        );
    }

    return NextResponse.json({
        count: movies.length,
        movies
    })
}