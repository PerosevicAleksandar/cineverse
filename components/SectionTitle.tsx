export function SectionTitle({
    eyebrow,
    title,
    description
} : {
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="mb-8 flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
                {description}
            </p>
        </div>
    )
}