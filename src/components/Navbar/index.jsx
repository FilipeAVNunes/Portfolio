import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="features" className="navbar">
      <div onClick={() => scroll.scrollToTop()}>
        <span data-aos="fade-up" data-aos-duration="1500">
          Filipe Nunes
        </span>
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
          data-aos="fade-up"
          data-aos-duration="2000"
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
          data-aos="fade-up"
          data-aos-duration="2500"
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
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
