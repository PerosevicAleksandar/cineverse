import { getAllDirectors } from "@/lib/data";
import { Profile } from "@/components/Profile";
import { notFound } from "next/navigation";

export default async function DirectorProfile({
    params
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const director = getAllDirectors().find((director) => director.slug === slug);

    if (!director) notFound();

    return <Profile person={director} role="director" />;

}