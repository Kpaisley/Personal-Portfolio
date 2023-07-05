import React, { Component } from 'react';
import './About.css';

export class About extends Component {

    componentDidMount() {

        //SLIDE LEFT ANIMATION WHEN USER SCROLLS OVER ABOUT SECTION
        const about = document.getElementById('about');
        const observer = new IntersectionObserver(entries => {   

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    about.classList.add('slide-left');
                    about.style.left = '0';
                }
            });
        });

        observer.observe(document.getElementById('about-page'));
        
    }

    render() {
        return (
            <div id="about-page">
                <div id="about" >
                    <div className="about-section">
                        <div className="about-title">
                            <h1>Who Am I?</h1>
                            <hr />
                        </div>
                        <div className="info-section">
                            <p>Recently graduated with a 4.0 GPA from Robertson College's Full Stack Web Development program;
                                I specialize in both front-end & back-end web development.
                            </p>
                        </div>
                        <span onClick={() => this.props.goToExperience()}>Check out my work!</span>
                    </div>
                </div>
            </div>
            
        );
    }
}