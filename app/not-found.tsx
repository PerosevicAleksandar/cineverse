import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-8xl font-bold text-primary">404</h1>

      <h2 className="mt-6 text-3xl font-semibold text-foreground">Page Not Found</h2>

      <p className="mt-4 max-w-md text-muted">Looks like this page didn&apos;t make the final cut. Let&apos;s get you back to the action.</p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        Back to Home
      </Link>
    </main>
  );
}