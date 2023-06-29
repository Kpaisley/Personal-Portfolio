import React, { Component } from 'react';
import './About.css';

export class About extends Component {

    componentDidMount() {

        //SLIDE LEFT ANIMATION WHEN USER SCROLLS OVER ABOUT
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
                            <p>Highly motivated Full-Stack Developer based in Alberta, Canada. I began working in the trades at a young age and decided to change paths and pursue my passion in programming.</p>
                            <p>Recent graduate from Robertson College with a 4.0 GPA, I specialize in both frontend & backend web development.</p>
                        </div>
                        <span onClick={() => this.props.goToExperience()}>Check out my work!</span>
                    </div>
                </div>
            </div>
            
        );
    }
}