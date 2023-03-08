import React, { Component } from 'react';
import './Experience.css';

export class Experience extends Component {


    render() {
        return (
            <div id="experience-page">
                <div className="experience-box-section">
                    <div className="experience-box">
                        <h2>ReactJS</h2>
                        <hr />
                        <img className="fw-logo" src="../react.svg" alt="React-Logo" width="100px"></img>
                        <h3>Shopping Cart Demo</h3>
                        <h4>Features</h4>
                        <div id="react-features" className="hidden fade-in">
                            <ul className="features-list">
                                <li>Fully responsive UI that works on all devices</li>
                                <li>Focused heavily on JavaScript and C#</li>
                                <li>Add, remove and change quantity of items in your cart using a local API with in memory data</li>
                                <li>Built using ReactJS and ASP.Net Core</li>
                            </ul>
                            <a className="demo-link" href="https://shopping-demo-react.azurewebsites.net/" target="_blank">View Demo!</a>
                        </div>
                    </div>
                    <div className="experience-box">
                        <h2>Angular</h2>
                        <hr />
                        <img id="angular-logo" className="fw-logo" src="../angular.svg" alt="Angluar-Logo" width="100px"></img>
                        <h3>Shopping Cart Demo</h3>
                        <h4>Features</h4>
                        <div id="angular-features" className="hidden fade-in">
                            <ul className="features-list">
                                <li>Fully responsive UI that works on all devices</li>
                                <li>Focued heavily on TypeScript and C#</li>
                                <li>Add, remove and change quantity of items in your cart using a local API with in memory data</li>
                                <li>Built using Angular and ASP.Net Core</li>
                            </ul>
                            <a className="demo-link" href="https://shopping-demo-angular.azurewebsites.net/" target="_blank">View Demo!</a>    
                        </div>
                    </div>
                </div>
                <div className="experience-bottom">
                    <h2>Internships</h2>
                    <p>I was fortunate enough to recieve an internship with STEM Montessori Academy of Canada.</p>
                    <br />
                    <p>During this time I was assigned to help build and design STEM Canada's new website for their operations in the United States. Participating in daily discussions and decisions regarding improving the
                        overall design, I was able to effectively communicate between other members working on the project through a remote workspace. </p>
                    <br />
                    <br />
                    <p> <a className="demo-link" href="https://stemamerica.tech/" target="_blank">View the Project!</a></p>
                </div>
            </div>
        );
    }
}