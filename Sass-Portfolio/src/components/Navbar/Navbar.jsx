import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="index.html" className="nav__link nav__link--active">Home</a>
                </li>
                <li className="nav__item">
                    <a href="about.html" className="nav__link">About Me</a>
                </li>
                <li className="nav__item">
                    <a href="projects.html" className="nav__link">My Projects</a>
                </li>
                <li className="nav__item">
                    <a href="contact.html" className="nav__link">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar