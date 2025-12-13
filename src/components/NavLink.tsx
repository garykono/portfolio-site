interface NavLinkProps {
    href: string;
    isNavLink?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
    return (
        <a
            href={href}
            className={`
                text-text-main px-2 py-2 rounded-md
                hover:bg-brand-subtle hover:text-brand-accent
                transition
                ${className}
            `}
        >
            {children}
        </a>
    );
}