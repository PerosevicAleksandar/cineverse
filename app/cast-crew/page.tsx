import { SectionTitle } from "@/components/SectionTitle";
import { PersonCard } from "@/components/PersonCard";
import { getAllActors, getAllDirectors } from "@/lib/data";

export default function CastCrew() {

    const actors = getAllActors();
    const directors = getAllDirectors();

    return (
        <section className="py-16">
            <div className="container">
                <div className="stack">
                    <SectionTitle
                        eyebrow="Cast & Crew"
                        title="Meet our Cast and Crew"
                        description="Discover the talented actors and visionary directors who bring unforgettable stories to life."
                    />
                </div>
                <div className="group/filter stack-md">
                    {/* Filter buttons */}
                    <div className="flex gap-3">
                        {(["all", "actors", "directors"] as const).map((filter) => (
                            <label key={filter} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="cast-filter"
                                    value={filter}
                                    defaultChecked={filter === "all"}
                                    className="peer sr-only"
                                />
                                <span className="inline-block rounded-lg border border-border bg-surface px-5 py-2 text-sm font-medium capitalize text-muted transition-colors hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white">
                                    {filter}
                                </span>
                            </label>
                        ))}
                    </div>
                    <div className="stack-md mt-3 group-has-[[value=actors]:checked]/filter:hidden">
                        <h2 className="text-2xl font-semibold">Directors</h2>
                        <div className="grid grid-cols-5 gap-5">
                            {directors.map((director) => (
                                <PersonCard
                                    key={director.id}
                                    person={director}
                                    role="director"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="stack-md mt-3 group-has-[[value=directors]:checked]/filter:hidden">
                        <h2 className="text-2xl font-semibold">Actors</h2>
                        <div className="grid grid-cols-5 gap-5">
                            {actors.map((actor) => (
                                <PersonCard
                                    key={actor.id}
                                    person={actor}
                                    role="actor"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}