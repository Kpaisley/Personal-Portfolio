import React, { Component } from 'react';
import './About.css';

export class About extends Component {

    render() {
        return (
            <div id="about-page">
                <div className="about-section">
                    <div className="about-title">
                        <h1>Who Am I?</h1>
                        <hr />
                    </div>
                    <div className="info-section">
                        <p>Highly motivated Full-Stack Developer based in Alberta, Canada. I began working in the trades at a young age and decided to change paths and pursue my passion in programming.</p>
                        <p>Recent graduate from Robertson College with a 4.0 GPA, I specialize in both frontend & backend web development.</p>
                    </div>
                    <span><a href="https://github.com/Kpaisley" target="_blank">Check out my work!</a></span>
                </div>
            </div>
        );
    }
}