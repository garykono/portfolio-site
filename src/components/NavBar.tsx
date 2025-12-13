import { useState } from "react";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

interface NavBarProps {
    className?: string;
}

export default function NavBar({ className = "" }: NavBarProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav className={`w-full ${className}`}>
            <Container>
                <div className="flex items-center justify-between py-3 gap-2">
                    {/* Logo / name */}
                    <NavLink
                        href="/"
                        className="px-0 text-base sm:text-lg font-semibold"
                    >
                        Gary Kono
                    </NavLink>

                    {/* Desktop nav */}
                    <ul className="hidden sm:flex gap-6 text-sm">
                        <li><NavLink href="/#home">Home</NavLink></li>
                        <li><NavLink href="/#projects">Projects</NavLink></li>
                        <li><NavLink href="/#about">About</NavLink></li>
                        <li><NavLink href="/#contact">Contact</NavLink></li>
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        className="sm:hidden p-2"
                        onClick={() => setShowMobileMenu(prev => !prev)}
                        aria-label="Toggle navigation"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                                d="M4 6h16M4 12h16M4 18h16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Simple mobile menu dropdown */}
                {showMobileMenu && (
                    <div className="sm:hidden border-t border-black/10 pb-3">
                        <ul className="flex flex-col gap-2 pt-3 text-sm">
                            <li><NavLink href="/#home">Home</NavLink></li>
                            <li><NavLink href="/#projects">Projects</NavLink></li>
                            <li><NavLink href="/#about">About</NavLink></li>
                            <li><NavLink href="/#contact">Contact</NavLink></li>
                        </ul>
                    </div>
                )}
            </Container>
        </nav>
    );
}