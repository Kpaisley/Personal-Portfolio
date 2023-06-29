import React, { Component } from 'react';
import './Experience.css';

export class Experience extends Component {


    render() {
        return (
            <div id="experience-page">


                <div className="experience-box-section">


                    <div className="experience-box-lg">
                        <h2>Full Stack Application</h2>
                        <hr />
                        <img className="fw-logo" src="../Business.png" alt="React-Logo" width="100px"></img>
                        <h3>Business Management Demo</h3>
                        <h4>Features</h4>
                        
                        <ul className="features-list-lg">
                            <li>Full Stack SPA built using ReactJS, ASP .Net Core and SQL Server</li>
                            <li>Implements secure account creation and user login using Auth0 technology</li>
                            <li>Connected to a SQL Server database, user's can manage and update their Products, Departments and Employees in real time with the use of effiecient Rest API's</li>
                            <li>Through strong front-end and back-end validation, a user is only able to access data that is directly associated to their personal account</li>
                            <li>Custom built relational database in which One to Many relationships are demonstrated between Employees and Departments</li>
                            <li>Hosted through Microsoft Azure Web Hosting & Azure SQL Server</li>
                        </ul>
                        <a className="demo-link" href="https://github.com/Kpaisley/Business-Management" target="_blank">View the Source Code!</a>
                        <br />
                        <a className="demo-link" href="https://businessmanagement.azurewebsites.net/" target="_blank">View the Project!</a>
                        
                    </div>


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
                                <li>Add, remove and change quantity of items in your cart using a local Rest API with in memory data</li>
                                <li>Built using ReactJS and ASP .Net Core</li>
                            </ul>
                            <a className="demo-link" href="https://github.com/Kpaisley/Shopping-Cart-React" target="_blank">View the Project!</a>
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
                                <li>Focused heavily on TypeScript and C#</li>
                                <li>Add, remove and change quantity of items in your cart using a local Rest API with in memory data</li>
                                <li>Built using Angular and ASP .Net Core</li>
                            </ul>
                            <a className="demo-link" href="https://github.com/Kpaisley/Shopping-Cart-Angular" target="_blank">View the Project!</a>    
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