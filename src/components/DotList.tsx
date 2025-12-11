type Item = string | React.ReactNode;

interface DotListProps {
    items: Item[];
    className?: string;
}

export function DotList({ items, className = "" }: DotListProps) {
    return (
        <div className={`flex flex-wrap items-center ${className}`}>
            {items.map((item, idx) => (
                <div key={idx} className="flex items-center">
                    {idx > 0 && <span className="mx-1.5 align-middle text-text-muted">•</span>}
                    <span className="text-sm text-text-secondary text-center">{item}</span>
                </div>
            ))}
        </div>
    );
}