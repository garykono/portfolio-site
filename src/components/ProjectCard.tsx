import { Chip } from "./Chip";
import { ChipGroup } from "./ChipGroup";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
    className?: string;
}

export function ProjectCard({
    title,
    description,
    tech,
    link,
}: ProjectCardProps) {
    return (
        <div className="rounded-lg border border-black/10 bg-white shadow-sm p-6 space-y-4 hover:shadow-md transition">
            <h4 className="heading-4">{title}</h4>
            <p className="text-body">{description}</p>

            {/* Tech tags */}
            <ChipGroup>
                {tech.map((t) => (
                    <Chip key={t} variant="tag">
                        {t}
                    </Chip>
                ))}
            </ChipGroup>

            {/* Link */}
            <a
                href={link}
                className="text-brand-accent hover:text-brand-accent-strong text-sm font-medium"
            >
                View Project →
            </a>
        </div>
    );
}