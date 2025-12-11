import { Card } from "./Card";
import { DotList } from "./DotList";

interface SkillCardProps {
    title?: string;
    items: string[];
    className?: string;
}

export function SkillCard({ title, items = [], className = "" }: SkillCardProps) {
    return (
        <Card className={`flex flex-col items-center gap-2 ${className}`}>
            <h3 className="heading-4 text-center">{title}</h3>
            <DotList items={items} />
        </Card>
    );
}