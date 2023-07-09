import React, { Component } from 'react';
import './Experience.css';

export class Experience extends Component {


    componentDidMount() {
        const bmDropdown = document.querySelector(".bm-dropdown");
        const bmDropdownBtn = document.querySelector("#bm-dropdown-btn");
        const bmFeatures = document.querySelector(".bm-dropdown-features");

        const reactDropdownBtn = document.querySelector("#react-dropdown-btn");
        const reactFeatures = document.querySelector(".react-dropdown-features");

        const angularDropdownBtn = document.querySelector("#angular-dropdown-btn");
        const angularFeatures = document.querySelector(".angular-dropdown-features");


        //Open and close Business Management dropdown
        bmDropdownBtn.addEventListener("click", () => {
            bmFeatures.classList.toggle('hide');

            if (bmDropdownBtn.innerHTML === "View More" && !bmFeatures.classList.contains('hide')) {
                bmDropdownBtn.innerHTML = "View Less";
                bmDropdown.style.maxHeight = "250vh";
            } else {
                bmDropdownBtn.innerHTML = "View More";
                bmDropdown.style.maxHeight = "15vh";
            }
        });

        //Open and close React Shopping Cart dropdown
        reactDropdownBtn.addEventListener("click", () => {

            reactFeatures.classList.toggle('hidden');
            if (reactDropdownBtn.innerHTML === "View More" && !reactFeatures.classList.contains('hide')) {
                reactDropdownBtn.innerHTML = "View Less";
            } else {
                reactDropdownBtn.innerHTML = "View More";
            }
            
        });

        //Open and close Angular Shopping Cart dropdown
        angularDropdownBtn.addEventListener("click", () => {

            angularFeatures.classList.toggle('hidden');
            if (angularDropdownBtn.innerHTML === "View More" && !angularFeatures.classList.contains('hide')) {
                angularDropdownBtn.innerHTML = "View Less";
            } else {
                angularDropdownBtn.innerHTML = "View More";
            }
        });

        


    }

    render() {
        return (
            <div id="experience-page">


                <div className="experience-box-section">


                    <div className="experience-box-lg">
                        <h2>Full Stack Application</h2>
                        <hr />
                        <img className="fw-logo" src="../Business.png" alt="React-Logo" width="100px"></img>
                        <h3>Business Management Demo</h3>


                        <div className="bm-dropdown">
                            <div className="bm-dropdown-features hide">
                                <ul className="features-list-lg">
                                    <li>Full Stack SPA Demo built using ReactJS, ASP.NET, Entity Framework Core and SQL Server</li>
                                    <li>Configured and hosted through Azure Cloud</li>
                                    <li>Implements secure account creation and user login using Auth0 technology coupled with strong client side validation</li>
                                    <li>Connected to a SQL Server database, user's can manage and update their Products, Departments and Employees in real time with the use of
                                        Rest API's connected to the back-end
                                    </li>
                                    <li>Through strong front-end and back-end validation, a user is only able to access data that is directly associated to their personal account</li>
                                    <li>Custom built relational database in which One to Many relationships are demonstrated between Employees and Departments</li>
                                </ul>
                            </div>
                            <h5 id="bm-dropdown-btn" className="dropdown-btn">View More</h5>
                        </div>

                        <a href="https://businessmanagement.azurewebsites.net/" target="_blank">View the Project!</a>
                        <br />
                        <a href="https://github.com/Kpaisley/Business-Management" target="_blank">Source Code</a>
                        
                    </div>


                    <div className="react-experience-box">
                        <h2>ReactJS</h2>
                        <hr />
                        <img className="fw-logo" src="../react.svg" alt="React-Logo" width="100px"></img>
                        <h3>Shopping Cart Demo</h3>

                        <div className="react-dropdown">
                            <div className="react-dropdown-features hidden">
                                <ul className="features-list">
                                    <li>Fully responsive UI that works on all devices</li>
                                    <li>Focused heavily on JavaScript and C#</li>
                                    <li>Add, remove and change quantity of items in your cart using a local Rest API with in memory data</li>
                                    <li>Built using ReactJS and ASP .Net Core</li>
                                </ul>
                            </div>
                           
                        </div>
                        <h5 id="react-dropdown-btn" className="dropdown-btn">View More</h5>
                        <a className="demo-link" href="https://github.com/Kpaisley/Shopping-Cart-React" target="_blank">View the Project!</a>
                    </div>







                    <div className="angular-experience-box">
                        <h2>Angular</h2>
                        <hr />
                        <img id="angular-logo" className="fw-logo" src="../angular.svg" alt="Angluar-Logo" width="100px"></img>
                        <h3>Shopping Cart Demo</h3>

                        <div className="angular-dropdown">
                            <div className="angular-dropdown-features hidden">
                                <ul className="features-list">
                                    <li>Fully responsive UI that works on all devices</li>
                                    <li>Focused heavily on TypeScript and C#</li>
                                    <li>Add, remove and change quantity of items in your cart using a local Rest API with in memory data</li>
                                    <li>Built using Angular and ASP .Net Core</li>
                                </ul>
                            </div>
                               
                        </div>
                        <h5 id="angular-dropdown-btn" className="dropdown-btn">View More</h5>
                        <a className="demo-link" href="https://github.com/Kpaisley/Shopping-Cart-Angular" target="_blank">View the Project!</a> 
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