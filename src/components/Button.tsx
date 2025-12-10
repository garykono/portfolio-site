interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}