import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import './style.css';

export class Navbar extends Component {
  state = {};
  render() {
    return (
      <div id="features" className="navbar">
        <div onClick={() => scroll.scrollToTop()}>
          <img src="images/FILIPENUNESFN.png" alt="FN" width="50" className="logo" />
        </div>
        <div className="nav">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="about"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="projects"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="contact"
          >
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
