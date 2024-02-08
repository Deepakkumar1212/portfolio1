import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    function toggleMobileMenu() {
        const menu = document.getElementById('hamburger-icon');
        menu.classList.toggle('open');
    }
  return (
    <header>
        <div id="brand">Portfolio</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home <span></span></Link>
                </li>
                <li>
                    <Link to="/skill">Skill <span></span></Link>
                </li>
                <li>
                    <Link to="/project">Project <span></span></Link>
                </li>
                <li>
                    <Link to="/about">About <span></span></Link>
                </li>
                <li>
                    <Link to="/contact">Contact <span></span></Link>
                </li>
            </ul>
        </nav>
        <div id="hamburger-icon" onClick={toggleMobileMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <ul className='mobile-menu'>
                <li>
                    <Link to="/">Home <span></span></Link>
                </li>
                <li>
                    <Link to="/skill">Skill <span></span></Link>
                </li>
                <li>
                    <Link to="/project">Project <span></span></Link>
                </li>
                <li>
                    <Link to="/about">About <span></span></Link>
                </li>
                <li>
                    <Link to="/contact">Contact <span></span></Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar