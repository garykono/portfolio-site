interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
    return (
        <a
            href={href}
            className={`text-slate-700 hover:text-blue-600 transition-colors ${className}`}
        >
            {children}
        </a>
    );
}