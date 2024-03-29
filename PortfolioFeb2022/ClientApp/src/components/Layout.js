import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

    


  render() {
    return (
        <div>
            <NavMenu goToHome={() => this.props.goToHome()} goToAbout={() => this.props.goToAbout()} goToContact={() => this.props.goToContact()} goToExperience={() => this.props.goToExperience()} />
            <Container tag="main">
                {this.props.children}
            </Container>
        </div>
    );
  }
}
