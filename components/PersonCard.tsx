import Link from "next/link";
import { InitialsAvatar } from "./InitialsAvatar";
import type { Actor, Director } from "@/lib/data";

export function PersonCard({
    person,
    role
}: {
    person: Actor | Director;
    role: "actor" | "director";
}) {

    const href = role === "actor"
    ? `/actors/${person.slug}`
    : `/directors/${person.slug}`;

    return (
        <Link
            href={href}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-center transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-[0_0_20px_rgba(229,9,20,0.25)]"
        >
            <InitialsAvatar variant="medium">
                {person.name}
            </InitialsAvatar>
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    {person.name}
                </h3>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">{role}</span>
                <p className="min-h-12 line-clamp-3 text-xs leading-relaxed text-muted">{person.shortBio}</p>
            </div>
        </Link>
    );
}