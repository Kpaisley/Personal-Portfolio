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

    componentDidMount() {
        //NAVBAR FADE-OUT WHEN SCROLLING DOWN
        window.addEventListener('scroll', () => {

            var homeTop = document.getElementById('home-page').getBoundingClientRect().top;

            homeTop >= -300
                ? document.getElementById('navbar').classList.remove('scroll-down-fade')
                : document.getElementById('navbar').classList.add('scroll-down-fade');

           


            document.getElementById('navbar').classList.contains('scroll-down-fade')
                ? document.getElementById('to-top-btn').classList.remove('opacity-hidden')
                : document.getElementById('to-top-btn').classList.add('opacity-hidden')

            //MAKES BUTTON VISIBILITY:HIDDEN WHEN IT FADES AWAY SO IT CANNOT BE CLICKED.
            document.getElementById('to-top-btn').classList.contains('opacity-hidden')
                ? document.getElementById('to-top-btn').classList.add('visibility-none')
                : document.getElementById('to-top-btn').classList.remove('visibility-none');
                
                
        })
    }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }


    
    

  render() {
      return (
        <div>
        <header id="navbar">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" container dark>
          <NavbarBrand tag={Link} to="/"><img src="../Kp-Icon-White.png" height='100px'></img></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-light nav-text" id="nav-home" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light nav-text" id="nav-about" onClick={() => this.props.goToAbout()}>About</NavLink>
              </NavItem>
               <NavItem>
                <NavLink className="text-light nav-text" onClick={() => this.props.goToExperience()}>Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light nav-text" onClick={() => this.props.goToContact()}>Contact</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
        </header>
              <span id="to-top-btn" className="opacity-hidden visibility-none" onClick={() => this.props.goToHome()}>^</span>
        </div>
    );
  }
}
