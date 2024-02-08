
import React from 'react';
import './Skill.css';
import 'boxicons';

const Skill = () => {
    return (
        <section>
            <div className="container1" id="skills">
                <h1 className="heading1">Technical Skills</h1>
                <div className="Technical-bars">
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>Java</span>
                        </div>
                        <div className="progress-line java">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>C++</span>
                        </div>
                        <div className="progress-line cplus">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>JavaScript</span>
                        </div>
                        <div className="progress-line javascript">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>DSA</span>
                        </div>
                        <div className="progress-line data">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>React js</span>
                        </div>
                        <div className="progress-line react">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>SQL</span>
                        </div>
                        <div className="progress-line sql">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>Operating System</span>
                        </div>
                        <div className="progress-line ops">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar"><i className='bx bxl-c-plus-plus'></i>
                        <div className="info">
                            <span>Bottstrap</span>
                        </div>
                        <div className="progress-line bootstrap">
                            <span></span>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="container2">
                <h1 className="heading2">Professional Skills</h1>
                <div className="radial-bars">
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">90%</div>
                        <div className="text">Creativity</div>
                    </div>
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">92%</div>
                        <div className="text">Problem Solving</div>
                    </div>
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">90%</div>
                        <div className="text">Team Collaboration</div>
                    </div>
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">75%</div>
                        <div className="text">Continuous Learning</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
