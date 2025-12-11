import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    loading?: boolean; // if true → disables + shows spinner
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

// When we render a <button>
type ButtonAsButtonProps = BaseButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined; // no href here
};

// When we render as a <a>
type ButtonAsLinkProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string; // href required
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
    variant = "primary",
    size = "md",
    href,
    loading = false,
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
}: ButtonProps) {
    const base = `inline-flex items-center justify-center font-medium rounded-md transition 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 whitespace-nowrap cursor-pointer`

    

    const variants: Record<ButtonVariant, string> = {
        primary: `
            bg-brand-accent text-white
            hover:bg-brand-accent-strong
            disabled:opacity-50 disabled:cursor-not-allowed
        `,
        secondary: `
            border border-black/10
            bg-white
            text-text-primary
            hover:bg-black/5
            disabled:opacity-50 disabled:cursor-not-allowed
        `,
        ghost: `
            bg-transparent
            text-text-secondary
            hover:bg-black/5
            disabled:opacity-50 disabled:cursor-not-allowed
        `,
    };

    const sizes: Record<ButtonSize, string> = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const content = (
        <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {loading ? "Loading..." : children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
    );

    const classes = clsx(base, variants[variant], sizes[size], className);

    // 🔹 Link branch
    if (href) {
        return (
            <a href={href} className={classes} {...rest as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
                {content}
            </a>
        );
    }

    // 🔹 Button branch
    const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button
            className={classes}
            disabled={loading || buttonRest.disabled}
            {...buttonRest}
        >
            {content}
        </button>
    );
}