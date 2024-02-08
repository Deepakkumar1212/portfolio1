import React from 'react';
import "./Home.css";
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si"; 
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Deepak Kumar</h1>
                <h3>And I'm a <span className="text">Software Developer</span></h3>
                <p>I'm a Software engineer as well as Frontend Developer
                    <br />
                    expertise is to create website and design.
                </p>
                <div className="home-sci">
                    <a href="https://www.linkedin.com/in/deepak-kumar-221212236/"><FaLinkedinIn /></a>
                    <a href="https://github.com/deepakkumar220"><FaGithub /></a>
                    <a href="https://leetcode.com/deepak113/"><TbBrandLeetcode /></a>
                    <a href="https://auth.geeksforgeeks.org/user/dk2025933/"><SiGeeksforgeeks /></a>
                </div>
                <a href="#" className="btn-box">More About Me</a>
            </div>
        </section>
    );
}

export default Home;
