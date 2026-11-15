import { getMovieBySlug, getAllActors, getAllDirectors, getAllMovies } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, Clock4, Play } from 'lucide-react';
import Link from "next/link";
import { InitialsAvatar } from "@/components/InitialsAvatar";
import { MovieCard } from "@/components/MovieCard";


export default async function MovieDetailsPage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;
    const movie = getMovieBySlug(slug);
    if (!movie) notFound();

    const actors = getAllActors().filter((actor) =>
        movie.actorSlugs.includes(actor.slug)
    );

    const director = getAllDirectors().find(
        (director) => director.slug === movie.directorSlug
    );

    const recommendedMovies = getAllMovies()
        .filter((item) => item.slug !== movie.slug)
        // eslint-disable-next-line react-hooks/purity
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    return (
        <section>
            <div
                className="relative h-100 w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${movie.backdropUrl})`
                }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[256px_1fr]">
                    <div className="relative z-10 -mt-10 w-64 overflow-hidden rounded-4xl border-4 border-background">
                        <Image
                            src={movie.posterUrl}
                            alt={`${movie.title} poster`}
                            width={256}
                            height={384}
                            className="block w-full object-cover"
                        />
                    </div>
                    <div className="movie-info flex flex-col gap-4">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            {movie.title}
                        </h1>
                        <div className="flex items-center gap-4 text-muted">
                            <span className="flex items-center gap-1">
                                <CalendarDays size={18} />{movie.releaseYear}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock4 size={18} />{movie.durationMinutes} min.
                            </span>
                            <span className="flex items-center gap-1 text-white">
                                <span className="text-yellow-400">★</span>
                                {movie.rating.toFixed(1)}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-muted">
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-xs font-medium text-muted"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 border-b border-border pb-6">
                            <h3 className="text-xl font-semibold tracking-tight text-foreground">Overview</h3>
                            <p className="max-w-3xl text-base leading-relaxed text-muted">{movie.description}</p>
                        </div>
                        <button
                            type="button"
                            className="flex max-w-96 cursor-pointer items-center justify-center gap-3 rounded-xl bg-primary px-9 py-3.5 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-primary-hover"
                        >
                            <Play size={20} fill="currentColor" />
                            <span>Watch Now</span>
                        </button>
                    </div>
                </div>
                <div className="container mt-12">
                    <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Cast & Crew</h2>
                    <div className="flex items-start gap-8">
                        <div className="flex flex-wrap items-center gap-4">
                            {actors.map((actor) => (
                                <Link
                                    href={`/actors/${actor.slug}`}
                                    key={actor.id}
                                    className="group flex w-28 flex-col items-center gap-3 text-center"
                                >
                                    <InitialsAvatar variant="large">
                                        {actor.name}
                                    </InitialsAvatar>
                                    <span className="flex h-10 items-start justify-center text-center text-xs font-medium leading-5 text-muted transition-colors group-hover:text-primary">
                                        {actor.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className="w-px self-stretch bg-border" />
                        {director && (
                            <Link
                                href={`/directors/${director.slug}`}
                                className="group flex w-28 flex-col items-center gap-3 text-center"
                            >
                                <InitialsAvatar variant="large">
                                    {director.name}
                                </InitialsAvatar>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-xs font-medium leading-5 text-muted transition-colors group-hover:text-primary">
                                        {director.name}
                                    </span>
                                    <span className="text-xs font-medium uppercase tracking-wider text-foregound">Director</span>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <section className="container mt-16">
                    <h2 className="mb-8 text-2xl font-semibold tracking-tight">
                        You May Also Like
                    </h2>

                    <div className="grid grid-cols-5 gap-6">
                        {recommendedMovies.map((item) => (
                            <MovieCard
                                key={item.id}
                                movie={item}
                                actors={getAllActors()}
                                director={getAllDirectors().find(
                                    (director) => director.slug === item.directorSlug
                                )!}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}