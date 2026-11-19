import Link from "next/link"

export function Header() {
    return (
        <header className="w-full border-b border-border bg-background">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-primary uppercase"
                >
                    <span className="text-foreground">Cine</span>verse
                </Link>

                <form action="/search" method="get" className="flex items-center gap-2">
                    <input
                        type="search"
                        name="q"
                        id="header-search-q"
                        placeholder="Search movies..."
                        className="w-56 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                        autoComplete="off"
                    />
                    <button type="submit" className="cursor-pointer rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">Search</button>
                </form>

                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/movies"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Movies
                    </Link>
                    <Link
                        href="/cast-crew"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Cast & Crew
                    </Link>
                </div>
            </nav>
        </header>
    )
}