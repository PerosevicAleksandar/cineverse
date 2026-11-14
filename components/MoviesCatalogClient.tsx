"use client";

import { Movie, MovieGenre, Director, Actor } from "@/lib/data";
import { useMemo, useState } from "react";
import { MovieCard } from "./MovieCard";

const durations = [
    { value: "short", label: "Under 2h" },
    { value: "medium", label: "2–3h" },
    { value: "long", label: "Over 3h" },
];

export default function MoviesCatalogClient({
    movies,
    genres,
    actors,
    directors
}: {
    movies: Movie[];
    genres: MovieGenre[];
    actors: Actor[];
    directors: Director[];
}) {
    const [query, setQuery] = useState<string>("");
    const [genre, setGenre] = useState<string>("all");
    const [duration, setDuration] = useState<string>("all");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        return movies.filter((movie) => {
            const matchesQuery = q === "" || movie.title.toLowerCase().includes(q);
            const matchesGenre = genre === "all" || movie.genres.includes(genre as MovieGenre);
            const matchesDuration =
                duration === "all" ||
                (duration === "short" && movie.durationMinutes < 120) ||
                (duration === "medium" &&
                    movie.durationMinutes >= 120 &&
                    movie.durationMinutes <= 180) ||
                (duration === "long" && movie.durationMinutes > 180);

            return matchesQuery && matchesGenre && matchesDuration;
        });
    }, [movies, query, genre, duration]);

    const resetFilters = () => {
        setQuery("");
        setGenre("all");
        setDuration("all");
    };

    const isFiltering = query !== "" || genre !== "all" || duration !== "all";

    return (
        <div className="flex flex-col gap-6">

            <div className="rounded-xl border border-border bg-surface p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="movie-search" className="text-sm font-medium text-muted">
                            Search by title
                        </label>
                        <input
                            id="movie-search"
                            type="text"
                            className="w-full rounded-lg border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-primary"
                            placeholder="e.g. Interstellar..."
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="movie-genre" className="text-sm font-medium text-muted">
                            Genre
                        </label>
                        <select
                            id="movie-genre"
                            className="w-full rounded-lg border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary cursor-pointer"
                            onChange={(e) => setGenre(e.target.value)}
                            value={genre}
                        >
                            <option value="all">All</option>
                            {genres.map((m) => (
                                <option key={m} value={m}>
                                    {m}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="movie-duration" className="text-sm font-medium text-muted">
                            Duration
                        </label>
                        <select
                            id="movie-duration"
                            className="w-full rounded-lg border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary cursor-pointer"
                            onChange={(e) => setDuration(e.target.value)}
                            value={duration}
                        >
                            <option value="all">All</option>
                            {durations.map((d) => (
                                <option key={d.value} value={d.value}>
                                    {d.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {isFiltering ? (
                        <button className="text-sm font-medium text-primary transition-colors hover:text-primary-hover cursor-pointer" onClick={resetFilters}>Reset filters</button>
                    ) : null}
                </div>

            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {filtered.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        actors={actors.filter((actor) =>
                            movie.actorSlugs.includes(actor.slug)
                        )}
                        director={directors.find(
                            (director) => director.slug === movie.directorSlug
                        )!}
                    />
                ))}
            </div>
        </div >
    );
}