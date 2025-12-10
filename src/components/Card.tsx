interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`rounded-lg shadow border border-slate-200 p-6 ${className}`}
        >
            {children}
        </div>
    );
}