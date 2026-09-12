import { NavLink } from "react-router-dom";
import "./Navbar.css"

export function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}