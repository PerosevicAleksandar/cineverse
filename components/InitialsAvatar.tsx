export function InitialsAvatar({
    variant = "medium",
    children
} : {
    variant?: "small" | "medium" | "large";
    children: string;
}) {
    function initials(name: string): string {
        return name
            .split(" ")
            .map((part) => part[0])
            .filter(Boolean)
            .slice(0, 2)
            .join("")
            .toUpperCase()
    }

    const className = variant === "small" ? "h-10 w-10 text-sm"
                                    : variant === "medium" ? "h-14 w-14 text-lg"
                                    : "h-20 w-20 text-2xl";

    return(
        <div className={`flex shrink-0 items-center justify-center rounded-full bg-surface-elevated border border-border font-semibold text-white group-hover:scale-105 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(229,9,20,0.35)] duration-300 ${className}`}>
            {initials(children)}
        </div>
    );
} 