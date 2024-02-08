import React from 'react';
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si"; 
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Email: dkom2110@gmail.com</p>
                <p>Phone: +91 9334260692</p>
            </div>
            <div className="social-icons">
                <div className="home-sci">
                    <a href="https://www.linkedin.com/in/deepak-kumar-221212236/"><FaLinkedinIn /></a>
                    <a href="https://github.com/deepakkumar220"><FaGithub /></a>
                    <a href="https://leetcode.com/deepak113/"><TbBrandLeetcode /></a>
                    <a href="https://auth.geeksforgeeks.org/user/dk2025933/"><SiGeeksforgeeks /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
