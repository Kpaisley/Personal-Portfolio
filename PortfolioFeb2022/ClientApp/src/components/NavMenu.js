import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }

    

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" container dark>
          <NavbarBrand tag={Link} to="/"><img src="../Kp-Icon-White.png" height='100px'></img></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-light nav-text" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light nav-text" onClick={() => this.props.goToAbout()}>About</NavLink>
              </NavItem>
              {/*<NavItem>*/}
              {/*  <NavLink tag={Link} className="text-light nav-text" to="/counter">Counter</NavLink>*/}
              {/*</NavItem>*/}
              {/*<NavItem>*/}
              {/*  <NavLink tag={Link} className="text-light nav-text" to="/fetch-data">Fetch data</NavLink>*/}
              {/*</NavItem>*/}
              {/*<NavItem>*/}
              {/* <NavLink tag={Link} className="text-light nav-text" to="/portfolio">Portfolio!</NavLink>*/}
              {/*</NavItem>*/}
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
