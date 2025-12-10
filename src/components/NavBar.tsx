import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

interface NavBarProps {
    className?: string;
}

export default function NavBar({ className }: NavBarProps) {
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav className="w-full bg-white border-b">
            <Container>
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