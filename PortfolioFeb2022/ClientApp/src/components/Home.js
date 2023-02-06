import React, { Component } from 'react';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;


    
    

  render() {
    return (
      <div>
            <div className="title">
                <div className="name">
                    <h1>KYLE PAISLEY</h1>
                    <h3>FULL STACK WEB DEVELOPER</h3>
                </div>
                <div className="icons">
                    <span><a href="https://www.linkedin.com/in/kyle-w-paisley/" target="_blank"><FaLinkedin size="4em" color="midnightblue" /></a></span>
                    <span><a href="https://github.com/Kpaisley" target="_blank"><FaGithubSquare size="4em" color="midnightblue" /></a></span>
                    <span><FaEnvelope size="4em" color="midnightblue" /></span>
                </div>
                
                
            </div>
            <hr />
            <div className="intro">
                <span>I am passionate about developing quality software with modern technology</span>
            </div>
            <div className="qualities">
                <span>
                    <img src="../magnifying-glass.png" alt="Magnifying Glass" width="70px"></img>
                    <br />
                    <br />
                    <strong>Detail Oriented</strong>
                </span>
                <span>
                    <img src="../analytic.png" alt="Analytic" width="85px"></img>
                    <br />
                    <br />
                    <strong>Analytics Driven</strong>
                </span>
                <span>
                    <img src="../lightbulb.png" alt="Light Bulb" width="85px"></img>
                    <br />
                    <br />
                    <strong>Problem Solving</strong>
                </span>
            </div>
            <div className="center">
                <span className="button" onClick={() => this.props.goToAbout()}>Learn More!</span>
            </div>
      </div>
    );
  }
}
