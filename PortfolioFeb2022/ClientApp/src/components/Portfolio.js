import React, { Component } from 'react';
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from './Contact';
import { Experience } from './Experience';


export class Portfolio extends Component {


    componentDidMount() {
        window.addEventListener('scroll', () => {
            const react = document.getElementById('react-features').getBoundingClientRect().top;
            const angular = document.getElementById('angular-features').getBoundingClientRect().top;

            if (react <= 0) {
                document.getElementById('react-features').classList.remove('hidden');
                document.getElementById('react-features').classList.add('fade-in');
            }

            if (angular <= 0) {
                document.getElementById('angular-features').classList.remove('hidden');
                document.getElementById('angular-features').classList.add('fade-in');
            }
        })
    }

    
    sendEmail = (event) => {
        event.preventDefault();
        console.log(event.value);
        const result = document.getElementById('submit-msg');
        result.innerHTML = "Sending Message...";
        
    }
    

    render() {
        return (
            <div>
                <Home goToAbout={() => this.props.goToAbout()} goToContact={() => this.props.goToContact()} />
                <About goToExperience={() => this.props.goToExperience()} />
                <Experience />
                <Contact sendEmail={this.sendEmail} />
            </div>
        );
    }
}