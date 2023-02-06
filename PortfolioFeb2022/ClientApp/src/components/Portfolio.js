import React, { Component } from 'react';
import { Home } from "./Home";
import { About } from "./About";

export class Portfolio extends Component {
    


    

    render() {
        return (
            <div>
                <Home goToAbout={() => this.props.goToAbout()} />
                <About />
            </div>
        );
    }
}