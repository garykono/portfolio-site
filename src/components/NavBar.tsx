import { useState } from "react";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

interface NavBarProps {
    className?: string;
}

export default function NavBar({ className }: NavBarProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav className={`w-full ${className}`}>
            <Container className="flex justify-between py-4">
                <div className="px-12">
                    <NavLink href="/">Gary Kono</NavLink>
                </div>
                <ul className="flex gap-6">
                    <li><NavLink href="/#home">Home</NavLink></li>
                    <li><NavLink href="/#projects">Projects</NavLink></li>
                    <li><NavLink href="/#about">About</NavLink></li>
                    <li><NavLink href="/#contact">Contact</NavLink></li>
                </ul>
            </Container>
        </nav>
    )
}