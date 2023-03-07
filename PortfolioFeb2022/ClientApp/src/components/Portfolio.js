import React, { Component } from 'react';
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from './Contact';


export class Portfolio extends Component {
    
    
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
                <About />
                <Contact sendEmail={this.sendEmail} />
            </div>
        );
    }
}