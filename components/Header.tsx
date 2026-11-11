import Link from "next/link"

export function Header() {
    return (
        <header className="w-full border-b border-border bg-background">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-primary uppercase"
                >
                    Cineverse
                </Link>

                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Home</Link>
                    <Link
                        href="/movies"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Movies</Link>
                    <Link
                        href="/actors"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Actors</Link>
                </div>
            </nav>
        </header>
    )
}