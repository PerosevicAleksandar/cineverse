import { SectionTitle } from "@/components/SectionTitle";
import { getAllActors, getAllDirectors, getAllMovies, getMovieGenres } from "@/lib/data";
import MoviesCatalogClient from "@/components/MoviesCatalogClient";

export default function Movies() {

    const movies = getAllMovies();
    const actors = getAllActors();
    const directors = getAllDirectors();
    const genres = getMovieGenres();

    return (
        <section className="py-16">
            <div className="container">
                <div className="stack">
                    <SectionTitle
                        eyebrow="Movies"
                        title="Explore our Collection"
                        description="Browse our collection of unforgettable stories, timeless classics, and cinematic adventures."
                    />
                </div>
                <MoviesCatalogClient 
                    movies={movies}
                    genres={genres}
                    actors={actors}
                    directors={directors}
                />
            </div>
        </section>
    );
}