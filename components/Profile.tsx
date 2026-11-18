import { Actor, Director, getAllMovies, getAllActors, getAllDirectors } from "@/lib/data";
import { InitialsAvatar } from "./InitialsAvatar";
import { MovieCard } from "./MovieCard";

export function Profile({
    person,
    role
}: {
    person: Actor | Director;
    role: "actor" | "director"
}) {

    const movies = getAllMovies().filter((movie) =>
        role === "actor"
            ? movie.actorSlugs.includes(person.slug)
            : movie.directorSlug === person.slug
    );

    const allActors = getAllActors();
    const allDirectors = getAllDirectors();

    return (
        <section className="container py-16">
            <div className="flex flex-col gap-12">
                    <div className="flex items-start gap-8 rounded-2xl border border-border bg-surface p-8">
                        <InitialsAvatar variant="large">
                            {person.name}
                        </InitialsAvatar>
                        <div className="flex flex-1 flex-col gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest text-primary">{role}</p>
                                <h1 className="text-4xl font-bold text-foreground">{person.name}</h1>
                            </div>
                                <p className="max-w-3xl leading-relaxed text-muted">{person.bio}</p>
                        </div>
                    </div>
                <div className="flex flex-col gap-6">
                    <div className="border-b border-border pb-4">
                        <h2 className="text-2xl font-semibold text-foreground">{role === "actor" ? "Movies Appeared In" : "Movies Directed"}</h2>
                    </div>
                    <div className="grid grid-cols-5 items-start gap-5">
                        {movies.map((movie) => {
                            const actors = allActors.filter((actor) =>
                                movie.actorSlugs.includes(actor.slug)
                            );

                            const director = allDirectors.find(
                                (director) => director.slug === movie.directorSlug
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
                </div>
            </div>
        </section>
    )
}