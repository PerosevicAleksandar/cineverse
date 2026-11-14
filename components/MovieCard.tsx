import type { Movie, Actor, Director } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function MovieCard({
    movie,
    actors,
    director
}: {
    movie: Movie;
    actors: Actor[];
    director: Director;
}) {
    return (
        <Link
            href={`/movies/${movie.slug}`}
            className="group relative block aspect-2/3 overflow-hidden rounded-xl border border-border transition-all duration-300 hover:z-10 hover:scale-105 hover:border-primary hover:shadow-[0_0_20px_rgba(229,9,20,0.35)]"
        >
            <Image
                src={movie.posterUrl}
                alt={`${movie.title} poster`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/90 to-transparent px-4 pb-4 pt-16 transition-all duration-500">
                <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-gray-300">{movie.releaseYear}</span>
                    <span className="flex items-center gap-1 text-white">
                        <span className="text-yellow-400">★</span>
                        {movie.rating.toFixed(1)}
                    </span>
                </div>

                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                        <div className="mt-4 space-y-2 border-t border-white/20 pt-3 text-xs text-gray-200">
                            <p>
                                <span className="font-semibold text-white">Director:</span>
                                {" "}{director.name}
                            </p>
                            <p>
                                <span className="font-semibold text-white">Cast:</span>
                                {" "}{actors.slice(0, 3).map((actor) => actor.name).join(", ")}
                            </p>
                            <p className="line-clamp-3 leading-relaxed text-gray-300">{movie.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
                    </Link>
    );
}