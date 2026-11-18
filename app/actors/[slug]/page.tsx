import { getAllActors } from "@/lib/data";
import { Profile } from "@/components/Profile";
import { notFound } from "next/navigation";

export default async function ActorProfile({
    params
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const actor = getAllActors().find((actor) => actor.slug === slug);

    if (!actor) notFound();

    return <Profile person={actor} role="actor" />;

}