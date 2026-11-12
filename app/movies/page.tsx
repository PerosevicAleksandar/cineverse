import { SectionTitle } from "@/components/SectionTitle";

export default function Movies() {
    return(
    <section className="py-16">
        <div className="container">
            <div className="stack">
                <SectionTitle
                    eyebrow="Movies"
                    title="Explore our Collection"
                    description="Browse our collection of unforgettable stories, timeless classics, and cinematic adventures."
                    />
            </div>

        </div>
    </section>
    );
}