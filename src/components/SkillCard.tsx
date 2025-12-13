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
            <DotList items={items} className="hidden md:flex" />
            <ul className="md:hidden flex flex-col gap-2 list-disc px-2 sm:px-4">
                {items.map((item) => {
                    return <li className="text-body">{item}</li>
                })}
            </ul>
        </Card>
    );
}