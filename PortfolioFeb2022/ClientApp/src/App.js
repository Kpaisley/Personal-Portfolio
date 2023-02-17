import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { Portfolio } from './components/Portfolio';

export default class App extends Component {
    static displayName = App.name;


    goToHome() {
        document.getElementById('home-page').scrollIntoView();
    }

    goToAbout() {
        document.getElementById('about-page').scrollIntoView();
    }

    goToContact() {
        document.getElementById('contact-page').scrollIntoView();
    }

  render() {
    return (
        <Layout goToHome={() => this.goToHome()} goToAbout={() => this.goToAbout()} goToContact={() => this.goToContact()} >
            <div>
                <Portfolio goToAbout={() => this.goToAbout()} goToContact={() => this.goToContact()} />
            </div>
      </Layout>
    );
  }
}
