import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-125 items-center justify-center bg-[url('/images/hero-banner.png')] bg-cover bg-center px-6">
        <div className="absolute inset-0 bg-black/50" />
           <div className="relative z-10 max-w-2xl text-center">
            <p className="mb-4 font-semibold tracking-widest text-primary uppercase">
              Welcome to cineverse
            </p>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Discover Your Next Favorite Movie
            </h1>
            <p className="mb-8 text-lg text-muted">
              Explore a universe of unforgettable stories, timeless classics,
              and cinematic adventures.
            </p>
            <Link
              href="/movies"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Watch Now
            </Link>
        </div>  
      </section>
    </div>
  );
}
