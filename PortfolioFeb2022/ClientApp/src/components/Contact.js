import React, { Component } from 'react';
import './Contact.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";  

export class Contact extends Component {


    render() {
        return (
            <div id="contact-page" className="form-bg">
                <div className="contact-form">
                    <h2>Contact Me</h2>
                    <h5>Fill out the form below to send me a message</h5>
                    <form onSubmit={this.props.sendEmail}>
                        <input type="hidden" name="access_key" value="da51d208-f7bc-40e1-b664-cffbcc86686f"></input>
                        <input type="hidden" name="subject" value="New Personal Portfolio Submission"></input>
                        <label className="label" htmlFor="name">
                            Name:
                            <input type="text" name="name" className="input" required></input>
                        </label>
                        <label className="label" htmlFor="company">
                            Company Name: <em>(optional)</em>
                            <input type="text" name="company" className="input"></input>
                        </label>
                        <label className="label" htmlFor="email">
                            Email:
                            <input type="email" name="email" className="input"></input>
                        </label>
                        <label className="label">
                            Message:
                            <textarea rows="5" className="textarea" name="message" required></textarea>
                        </label>
                        <input type="submit" className="submit" value="Submit"></input>
                        <div id="submit-msg" className="text-light"></div>
                    </form>
                    
                </div>
            </div>
        );
    }
}