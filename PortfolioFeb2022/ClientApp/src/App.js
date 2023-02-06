import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { Portfolio } from './components/Portfolio';

export default class App extends Component {
    static displayName = App.name;


    goToAbout() {
        document.getElementById('about-me').scrollIntoView();
    }

  render() {
    return (
        <Layout goToAbout={() => this.goToAbout()} >
            <div>
                <Portfolio goToAbout={() => this.goToAbout()} />
            </div>
      </Layout>
    );
  }
}
