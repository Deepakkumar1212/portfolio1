import React from 'react';
import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-text">
                <h2>About <span>Me</span></h2>
                <h4>Software Developer and Frontend Developer</h4>
                <p>I am a computer science engineer. I am a frontend developer.<br /> I did many projects like Amazon clone, Ecommerce website <br />
                    Real estate, Tesla Clone, Porfolio and Many more.</p>
                <a href="#" className="btn-box">More</a>
            </div>
        </section>
    );
}

export default About;
