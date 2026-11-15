import { getMovieBySlug, getAllActors, getAllDirectors } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, Clock4, Play } from 'lucide-react';
import Link from "next/link";


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
                                <CalendarDays size={18}/>{movie.releaseYear}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock4 size={18}/>{movie.durationMinutes} min.
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
                        <div className="flex items-center gap-2">
                            <span className="text-muted">Director:</span>
                            <Link
                                href={`/directors/${director?.slug}`}
                                className="font-medium text-foreground transition-colors hover:text-primary"
                            >
                                {director?.name}
                            </Link>
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
            </div>
        </section>
    );
}