interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`rounded-xl shadow-sm bg-brand-subtle border border-brand-subtle/80 p-6 ${className}`}
        >
            {children}
        </div>
    );
}