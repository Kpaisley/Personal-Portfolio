import React, { Component } from 'react';
import './Experience.css';

export class Experience extends Component {


    componentDidMount() {

        //SLIDE RIGHT ANIMATION WHEN USER SCROLLS OVER Experience Section
        const internSection = document.querySelector('.experience-top');
        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    internSection.classList.add('slide-right');
                    internSection.style.right = "0";
                }
            });
        });

        observer.observe(document.querySelector("#experience-page"));


        //Open and close Business Management dropdown
        const bmSection = document.querySelector('#bm-experience-box');
        const bmDropdown = document.querySelector("#bm-dropdown");
        const bmDropdownBtn = document.querySelector("#bm-dropdown-btn");

        bmDropdownBtn.addEventListener("click", () => {

            bmDropdown.classList.toggle('hide');

            if (!bmDropdown.classList.contains('hide')) {
                bmDropdownBtn.innerHTML = "View Less";

            } else {
                bmDropdownBtn.innerHTML = "View More";
                bmSection.scrollIntoView();
            }
        });
        

        //Open and close React Shopping Cart dropdown
        const reactSection = document.querySelector('#react-experience-box');
        const reactDropdownBtn = document.querySelector("#react-dropdown-btn");
        const reactDropdown = document.querySelector("#react-dropdown");

        reactDropdownBtn.addEventListener("click", () => {
            reactDropdown.classList.toggle('hide');

            if (!reactDropdown.classList.contains('hide')) {
                reactDropdownBtn.innerHTML = "View Less";

            } else {
                reactDropdownBtn.innerHTML = "View More";
                reactSection.scrollIntoView();
            }
        });


        //Open and close Angular Shopping Cart dropdown       
        const angularSection = document.querySelector('#angular-experience-box');
        const angularDropdownBtn = document.querySelector("#angular-dropdown-btn");
        const angularDropdown = document.querySelector("#angular-dropdown");

        angularDropdownBtn.addEventListener("click", () => {
            angularDropdown.classList.toggle('hide');

            if (!angularDropdown.classList.contains('hide')) {
                angularDropdownBtn.innerHTML = "View Less";

            } else {
                angularDropdownBtn.innerHTML = "View More";
                angularSection.scrollIntoView();
            }
        });
    }

    render() {
        return (
            <div id="experience-page">

                <div className="experience-top">
                    <div>
                        <h1>Internships</h1>
                        <hr />
                    </div>
                    <h3>STEM Montessori Academy of Canada</h3>
                    <p className="intern-desc">
                        During my internship with STEM Canada, I collaborated with a dedicated team to build and design the website for the Canadian
                        Institute of STEM Innovation, gaining valuable hands-on experience in web development and design.
                    </p>

                    <p> <a className="demo-link" href="https://cisi.tech/" rel="noreferrer" target="_blank">View the Project!</a></p>
                </div>

                <div className="experience-box-section">


                    <div id="bm-experience-box" className="experience-box-lg">
                        <h2>Full Stack Application</h2>
                        <hr />
                        <img className="fw-logo" src="../Business.png" alt="React-Logo" width="100px"></img>
                        <h3>Business Management Demo</h3>

                        <div id="bm-dropdown" className="dropdown hide">
                            <ul className="features-list">
                                <li>Full Stack SPA Demo built using ReactJS, ASP.NET, Entity Framework Core and SQL Server.</li>
                                <li>Configured and hosted through Azure Cloud.</li>
                                <li>Implements secure account creation and user login using Auth0 technology coupled with strong client side validation.</li>
                                <li>Connected to a SQL Server database, user's can manage and update their Products, Departments and Employees in real time with the use of
                                    Rest API's connected to the back-end.
                                </li>
                                <li>Through strong front-end and back-end validation, a user is only able to access data that is directly associated to their personal account.</li>
                                <li>Custom built relational database in which One to Many relationships are demonstrated between Employees and Departments.</li>
                            </ul>
                        </div>
                        <h5 id="bm-dropdown-btn" className="dropdown-btn">View More</h5>
                        <a className="proj-link" href="https://businessmanagement.azurewebsites.net/" rel="noreferrer" target="_blank">View the Project!</a>
                        <a className="proj-link" href="https://github.com/Kpaisley/Business-Management" rel="noreferrer" target="_blank">Source Code</a>
                    </div>
                    
                    <div id="react-experience-box" className="experience-box-sm">
                        <h2>ReactJS</h2>
                        <hr />
                        <img className="fw-logo" src="../react.svg" alt="React-Logo" width="100px"></img>
                        <div id="react-dropdown" className="dropdown hide">
                            <ul className="features-list">
                                <li>Built using ReactJS and ASP .Net Core.</li>
                                <li>Fully responsive UI that works on all devices.</li>
                                <li>Focused heavily on JavaScript and C#.</li>
                                <li>Rest API backend allows you to add, remove and change the quantity of items in your cart.</li>
                                <li>Client-side validation to ensure empty orders are not submitted.</li>
                            </ul>
                        </div>
                        <h5 id="react-dropdown-btn" className="dropdown-btn">View More</h5>
                        <a className="proj-link" href="https://github.com/Kpaisley/Shopping-Cart-React" rel="noreferrer" target="_blank">View the Project!</a>
                    </div>

                    <div id="angular-experience-box" className="experience-box-sm">
                        <h2>Angular</h2>
                        <hr />
                        <img id="angular-logo" className="fw-logo" src="../angular.svg" alt="Angluar-Logo" width="100px"></img>
                        <div id="angular-dropdown" className="dropdown hide">
                            <ul className="features-list">
                                <li>Built using Angular and ASP .Net Core.</li>
                                <li>Fully responsive UI that works on all devices.</li>
                                <li>Focused heavily on TypeScript and C#.</li>
                                <li>Rest API backend allows you to add, remove and change the quantity of items in your cart.</li>
                                <li>Client-side validation to ensure empty orders are not submitted.</li>
                            </ul>
                        </div>
                        <h5 id="angular-dropdown-btn" className="dropdown-btn">View More</h5>
                        <a className="proj-link" href="https://github.com/Kpaisley/Shopping-Cart-Angular" rel="noreferrer" target="_blank">View the Project!</a>
                    </div>
                </div>
            </div>
        );
    }
}