interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
    return (
        <div
            className={`
                w-full max-w-6xl mx-auto
                px-4      /* mobile */
                sm:px-6   /* small tablets / large phones */
                md:px-8   /* tablets / small laptops */
                lg:px-10  /* desktops */
                ${className}
            `}
        >
            {children}
        </div>
    );
}