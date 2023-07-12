import React, { Component } from 'react';
import './Contact.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";  

export class Contact extends Component {


    sendEmail = (event) => {
        event.preventDefault();
        const message = document.getElementById('submit-msg');
        var object = {};

        for (let i = 0; i < event.target.length - 1; i++) {

            object[event.target[i].name] = event.target[i].value;
            event.target[i].value = ""; //RESET VALUE IN FORM INPUT FIELDS
        }
        var json = JSON.stringify(object);
        message.innerHTML = "Sending message...";

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    message.innerHTML = json.message;
                } else {
                    message.innerHTML = "Something went wrong...";
                }
            });
    }


    





    render() {
        return (
            <div id="contact-page">
                <div className="contact-form">
                    <h2>Contact Me</h2>
                    <h5>Fill out the form below to send me a message</h5>
                    <form onSubmit={this.sendEmail} id="contact-form">
                        <input type="hidden" name="access_key" value="da51d208-f7bc-40e1-b664-cffbcc86686f"></input>
                        <input type="hidden" name="subject" value="New Personal Portfolio Submission"></input>
                        <label className="label" htmlFor="name">
                            Name:
                            <input type="text" id="name" name="name" className="input" required></input>
                        </label>
                        <label className="label" htmlFor="company">
                            Company Name: <em>(optional)</em>
                            <input type="text" id="company" name="company" className="input"></input>
                        </label>
                        <label className="label" htmlFor="email">
                            Email:
                            <input type="email" id="email" name="email" className="input"></input>
                        </label>
                        <label className="label">
                            Message:
                            <textarea rows="5" className="textarea" name="message" required></textarea>
                        </label>
                        <input type="submit" className="submit" value="Submit"></input>
                        <div id="submit-msg" className="text-light"></div>
                    </form>
                </div>
                <div className='main-footer'>
                    <h5>Copyright &copy; {new Date().getFullYear()} | Kyle Paisley</h5>
                </div>
            </div>
        );
    }
}