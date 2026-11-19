import { MovieCard } from "@/components/MovieCard";
import {
    getAllMovies,
    getAllActors,
    getAllDirectors
} from "@/lib/data";

export default async function SearchPage({
    searchParams
}: {
    searchParams: Promise<{ q?: string }>
}) {
    const { q = "" } = await searchParams;
    const trimmed = q.trim().toLowerCase();

    const movies = getAllMovies().filter((movie) =>
        movie.title.toLowerCase().includes(trimmed)
    );

    const allActors = getAllActors();
    const allDirectors = getAllDirectors();

    return (
        <section className="container py-16">
            <div className="stack">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Search Results
                    </h1>

                    <p className="mt-2 text-muted">
                        {trimmed
                            ? `${movies.length} results for "${q.trim()}"`
                            : "Explore all movies"}
                    </p>
                </div>

                {movies.length > 0 ? (
                    <div className="grid grid-cols-5 gap-5">
                        {movies.map((movie) => {
                            const actors = allActors.filter((actor) =>
                                movie.actorSlugs.includes(actor.slug)
                            );

                            const director = allDirectors.find(
                                (director) =>
                                    director.slug === movie.directorSlug
                            );

                            if (!director) return null;

                            return (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    actors={actors}
                                    director={director}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-muted">
                        No movies found. Try a different search.
                    </p>
                )}
            </div>
        </section>
    );
}
