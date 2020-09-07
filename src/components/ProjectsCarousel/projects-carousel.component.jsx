import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import "./projects-carousel.styles.scss";

const ProjectsCarousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Carousel data-aos="fade-up">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/crwn-clothing.png"
            alt="First slide"
          />
          <Carousel.Caption data-aos="zoom-in-up">
            <Button
              className="check-out-more"
              variant="outline-dark"
              href="https://crwn-clothing-byfilipenunes.herokuapp.com/"
            >
              Check out more!
            </Button>
            <p>E-commerce website with React.js and Stripe Payment.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/footheads.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Button
              className="check-out-more"
              variant="outline-dark"
              href="https://footheads.herokuapp.com/"
            >
              Check out more!
            </Button>
            <p style={{ color: "black" }}>
              Football results, blog posts, league tables and score prediction
              from the users.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/4lolz.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Button
              className="check-out-more"
              variant="outline-dark"
              href="https://fullstack-froject2-ironhack.herokuapp.com/"
            >
              Check out more!
            </Button>
            <p>A way to relax, with programming memes and funny pictures.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/kobeee.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Button
              className="check-out-more"
              variant="outline-dark"
              href="https://kobeeebyfilipenunes.netlify.app/"
            >
              Check out more!
            </Button>
            <p>Basketball mini-game paying tribute to Kobe Bryant.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
